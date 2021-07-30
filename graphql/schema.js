const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

const bcrypt = require("bcrypt");
const { createUserValidation } = require("../validations/user.validation");
const User = require("../models/user.model");
const Story = require("../models/story.model");
const userType = new GraphQLObjectType({
  name: "userType",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLID) },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    stories: {
      type: GraphQLList(storyType),
      resolve: async (author) => {
        return await Story.find({ authorID: author.id });
      },
    },
  }),
});
const storyType = new GraphQLObjectType({
  name: "storyType",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLID) },
    content: { type: GraphQLString },
    authorID: { type: GraphQLID },
    author: {
      type: userType,
      resolve: async (story) => {
        return await User.findById(story.authorID);
      },
    },
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
      type: userType,
      args: {
        username: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: async (_, args) => {
        const { error } = createUserValidation(args);
        if (error) throw new Error(error);
        const emailExist = await User.findOne({ email: args.email });
        if (emailExist) throw new Error("Email already exist");
        const hashPassword = await bcrypt.hash(args.password.toString(), 10);
        const user = new User({
          username: args.username,
          email: args.email,
          password: hashPassword,
        });
        return await user.save();
      },
    },
    createStory: {
      type: storyType,
      args: {
        content: { type: GraphQLString },
        authorID: { type: GraphQLID },
      },
      resolve: async (_, args) => {
        const story = new Story(args);
        return await story.save();
      },
    },
  }),
});
const schema = new GraphQLSchema({ query: queryType, mutation: mutationType });

module.exports = schema;
