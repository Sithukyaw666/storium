const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  createUserValidation,
  loginValidation,
} = require("../validations/user.validation");
const User = require("../models/user.model");
const Story = require("../models/story.model");
const verifyToken = require("../utils/authenticate");
const userType = new GraphQLObjectType({
  name: "userType",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLID) },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    followers: { type: GraphQLList(GraphQLID) },
    followings: { type: GraphQLList(GraphQLID) },
    stories: {
      type: GraphQLList(storyType),
      resolve: async (author) => {
        return await Story.find({ authorID: author.id });
      },
    },
  }),
});
const authType = new GraphQLObjectType({
  name: "authType",
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
  }),
});
const validationType = new GraphQLObjectType({
  name: "validationType",
  fields: () => ({
    error: { type: GraphQLString },
    user: { type: GraphQLID },
  }),
});
const storyType = new GraphQLObjectType({
  name: "storyType",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    authorID: { type: GraphQLID },
    reactions: { type: GraphQLList(GraphQLID) },
    comments: {
      type: GraphQLList(commentType),
    },
    createdAt: { type: GraphQLString },
    author: {
      type: userType,
      resolve: async (story) => {
        return await User.findById(story.authorID);
      },
    },
  }),
});
const commentType = new GraphQLObjectType({
  name: "commentType",
  fields: () => ({
    id: { type: GraphQLID },
    author: { type: GraphQLID },
    comment: { type: GraphQLString },
  }),
});
const queryType = new GraphQLObjectType({
  name: "query",
  fields: () => ({
    getUserById: {
      type: userType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: async (_, { id }) => {
        return await User.findById(id);
      },
    },
    me: {
      type: authType,
      resolve: async (a, b, context) => {
        const user = verifyToken(context);
        if (user) {
          const user_ = await User.findById(user);

          return { id: user_._id, username: user_.username };
        } else return { id: null };
      },
    },
    getAllStory: {
      type: GraphQLList(storyType),
      resolve: async () => {
        return Story.find({});
      },
    },
    getStoryById: {
      type: storyType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: async (_, { id }) => {
        return Story.findById(id);
      },
    },
  }),
});
const mutationType = new GraphQLObjectType({
  name: "mutation",
  fields: () => ({
    createUser: {
      type: validationType,
      args: {
        username: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: async (_, args) => {
        const { error } = createUserValidation(args);
        if (error) return { error: error.details[0].message };
        const emailExist = await User.findOne({ email: args.email });
        if (emailExist) return { error: "Email is already in use" };
        const hashPassword = await bcrypt.hash(args.password.toString(), 10);
        const user = new User({
          username: args.username,
          email: args.email,
          password: hashPassword,
        });
        const newUser = await user.save();
        return { user: newUser._id };
      },
    },
    loginUser: {
      type: validationType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve: async (_, args, context) => {
        const { error } = loginValidation(args);
        if (error) return { error: error.details[0].message };
        const user = await User.findOne({ email: args.email });
        if (!user) return { error: "User not found" };
        const match = await bcrypt.compare(args.password, user.password);
        if (!match) return { error: "Incorrect Password" };
        if (match) {
          const token = jwt.sign({ user: user._id }, process.env.TOKEN_SECRET);
          context.res.cookie("bearer", token, {
            httpOnly: true,
          });
          return { user: user._id };
        }
      },
    },
    createStory: {
      type: storyType,
      args: {
        title: { type: GraphQLString },
        content: { type: GraphQLString },
      },
      resolve: async (_, { title, content }, context) => {
        const user = verifyToken(context);

        if (user) {
          const story = new Story({
            title: title,
            content: content,
            authorID: user,
          });
          return await story.save();
        }
      },
    },
    logout: {
      type: authType,
      resolve: async (a, b, context) => {
        context.res.clearCookie("bearer");
        return { id: null };
      },
    },

    deleteStory: {
      type: storyType,
      args: { id: { type: GraphQLID } },
      resolve: async (_, { id }, context) => {
        const user_id = verifyToken(context);
        const story = await Story.findById(id);
        if (story.authorID == user_id) {
          await Story.findByIdAndDelete(id);
          return { id };
        } else {
          throw new Error();
        }
      },
    },
    updateStory: {
      type: storyType,
      args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        content: { type: GraphQLString },
      },
      resolve: async (_, { id, title, content }, context) => {
        const user_id = verifyToken(context);
        const story = await Story.findById(id);
        if (story.authorID == user_id) {
          await Story.findByIdAndUpdate(id, { title, content });
          return story;
        } else {
          throw new Error();
        }
      },
    },
    react: {
      type: storyType,
      args: { id: { type: GraphQLID } },
      resolve: async (_, { id }, context) => {
        const user_id = verifyToken(context);
        const story = await Story.findById(id);
        if (!story) throw new Error("Story not found");
        await story.react(user_id);
        return story;
      },
    },
    comment: {
      type: storyType,
      args: {
        id: { type: GraphQLID },
        comment: { type: GraphQLString },
      },
      resolve: async (_, { id, comment }, context) => {
        const author = verifyToken(context);
        const story = await Story.findById(id);
        if (!story) throw new Error("story not found");
        const cmt = { comment, author };
        await story.comment(cmt);
        return story;
      },
    },
    followUser: {
      type: userType,
      args: { id: { type: GraphQLID } },
      resolve: async (_, { id }, context) => {
        const user_id = verifyToken(context);
        const user = await User.findById(id);
        const user_ = await User.findById(user_id);
        if (!user) throw new Error("user not found");
        await user.follow(user_id);
        await user_.addFollowings(id);
        return user;
      },
    },
  }),
});
const schema = new GraphQLSchema({ query: queryType, mutation: mutationType });

module.exports = schema;
