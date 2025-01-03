import { Router } from "express";
const router = Router();

const posts = [
  {
    id: 1,
    title: "Post 1",
  },
  {
    id: 2,
    title: "Post 2",
  },
  {
    id: 3,
    title: "Post 3",
  },
];

//GET all posts
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

//GET single post
router.get("/:id", (req, res) => {
  const post = posts.find((post) => post.id === parseInt(req.params.id));
  if (!post) {
    return res
      .status(404)
      .json({ msg: `Post with ID: ${req.params.id} not found` });
  }
  res.status(200).json(post);
});

// Create new Post
router.post("/", (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ msg: "Please include a title" });
  }
  const newPost = {
    id: posts.length + 1,
    title,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Update Post
router.put("/:id", (req, res) => {
  const post = posts.find((post) => post.id === parseInt(req.params.id));
  if (!post) {
    return res
      .status(404)
      .json({ msg: `Post with ID: ${req.params.id} not found` });
  }
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ msg: "Please include a title" });
  }
  post.title = title;
  res.status(200).json(post);
});

// Delete Post
router.delete("/:id", (req, res) => {
  const postIndex = posts.findIndex(
    (post) => post.id === parseInt(req.params.id)
  );
  if (postIndex === -1) {
    return res
      .status(404)
      .json({ msg: `Post with ID: ${req.params.id} not found` });
  }
  posts.splice(postIndex, 1);
  res.status(200).json({ msg: `Post with ID: ${req.params.id} deleted` });
});

export default router;