const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/post-app")
  .then(() => {
    console.log("✅ Connected to mongoDB");
  })
  .catch((err) => console.log("\n\nError while connecting to mongoDB =>", err));

require("./model/post");

