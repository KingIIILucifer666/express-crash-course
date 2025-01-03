import express from "express";
const app = express();
import path from "path";
import posts from "./routes/posts.js";

const port = process.env.PORT || 3001;

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setup static folder
// app.use(express.static(path.join(__dirname, "public")));

//Router
app.use("/api/posts", posts);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
