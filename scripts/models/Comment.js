// models/Comment.js

const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    creation: {
      type: Date,
      required: true,
      min: 6,
    },
    likes: {
      type: Array,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
