const { Schema, model } = require("mongoose");

const storySchema = new Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  authorID: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  reactions: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      comment: {
        type: String,
      },
      author: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});

storySchema.methods.react = function (id) {
  if (this.reactions.indexOf(id) === -1) {
    this.reactions.push(id);
  } else {
    this.reactions = this.reactions.filter((u) => u != id);
  }
  this.save();
};

storySchema.methods.comment = function (cmt) {
  this.comments.push(cmt);
  this.save();
};
module.exports = model("Story", storySchema);
