const express = require("express");
const router = express.Router();

const comments = require("../../db/comments");

router.get("/", (req, res) => {
  res.send(comments.getAllComments());
});

router.post("/", (req, res) => {
  res.send(comments.addComment(req.body));
});

module.exports = router;
