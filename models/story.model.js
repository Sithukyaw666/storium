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
  claps: {
    type: Number,
    default: 0,
  },
});

storySchema.methods.clap = function () {
  this.claps++;
  return this.save();
};

module.exports = model("Story", storySchema);
