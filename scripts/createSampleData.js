const Comment = require("./models/Comment");
const Post = require("./models/Post");
const User = require("./models/User");

async function createSampleData() {
  try {
    const user1 = new User({
      username: "john_doe",
      email: "john@example.com",
      password: "password123",
      profilePicture: "https://example.com/profile.jpg",
      biography: "Hello, I'm John Doe!",
    });
    await user1.save();

    const user2 = new User({
      username: "jane_doe",
      email: "jane@example.com",
      password: "password456",
      profilePicture: "https://example.com/profile.jpg",
      biography: "Hello, I'm Jane Doe!",
    });
    await user2.save();

    const post1 = new Post({
      userId: user1._id,
      authorId: user1._id,
      content: "This is the first post. #excited",
      likes: [user2._id],
      comments: [
        {
          userId: user2._id,
          content: "Great post, John!",
        },
      ],
    });
    await post1.save();

    const post2 = new Post({
      userId: user2._id,
      authorId: user2._id,
      content: "Just posted a new photo! #photography",
      likes: [user1._id],
      comments: [
        {
          userId: user1._id,
          content: "Beautiful shot, Jane!",
        },
      ],
    });
    await post2.save();

    // Erstelle Beispiel-Kommentardaten
    const comment1 = new Comment({
      userId: user1._id,
      content: "This is the first comment. Great post!",
      creation: new Date(),
    });
    await comment1.save();

    const comment2 = new Comment({
      userId: user2._id,
      content: "This is the second comment. Nice photo!",
      creation: new Date(),
    });
    await comment2.save();

    console.log("Sample data created successfully.");
  } catch (error) {
    console.error("Error creating sample data:", error);
  }
}

createSampleData();
