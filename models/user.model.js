const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 255,
  },
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  followings: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

userSchema.methods.follow = function (id) {
  if (this.followers.indexOf(id) === -1) {
    this.followers.push(id);
  } else {
    this.followers = this.followers.filter((f) => f != id);
  }
  return this.save();
};
userSchema.methods.addFollowings = function (id) {
  if (this.followings.indexOf(id) === -1) {
    this.followings.push(id);
  } else {
    this.followings = this.followings.filter((f) => f != id);
  }
  return this.save();
};

module.exports = model("User", userSchema);
