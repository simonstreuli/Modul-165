const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const createCollections = require("./createCollections");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const uploadRoute = require("./routes/upload");

dotenv.config();

const PORT = process.env.PORT || 6001;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
    createCollections();
  })
  .catch((error) => console.log(`${error} did not connect`));

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/upload", uploadRoute);
