import express from "express";
import path from "path";
import url from "url";
import posts from "./routes/posts.js";
import { logger } from "./middleware/posts.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";

const app = express();

const port = process.env.PORT || 3001;

// GET current PATH
// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Middleware
app.use(logger);

//Setup static folder
// app.use(express.static(path.join(__dirname, "public")));

//Router
app.use("/api/posts", posts);

//Error Handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
