const Comment = require("./models/Comment");
const Post = require("./models/Post");
const User = require("./models/User");

async function createCollections() {
  try {
    await Comment.deleteMany({});
    await Post.deleteMany({});
    await User.deleteMany({});

    console.log("Existing data deleted successfully.");

    const commentCollection = await Comment.createCollection();
    if (commentCollection) {
      console.log("Comment collection created successfully.");
    } else {
      console.error("Error creating Comment collection.");
    }

    const postCollection = await Post.createCollection();
    if (postCollection) {
      console.log("Post collection created successfully.");
    } else {
      console.error("Error creating Post collection.");
    }

    const userCollection = await User.createCollection();
    if (userCol < Alection) {
      console.log("User collection created successfully.");
    } else {
      console.error("Error creating User collection.");
    }
  } catch (error) {
    console.error("Error creating collections:", error);
  }
  console.log("Loading sample data...");
  const createSampleData = require("./createSampleData");
}

module.exports = createCollections;
