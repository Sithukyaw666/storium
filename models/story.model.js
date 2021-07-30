const { Schema, model } = require("mongoose");

const storySchema = new Schema({
  content: {
    type: String,
  },
  authorID: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Story", storySchema);
