const express = require("express");
const { getAllImages } = require("./../../db/images");

const router = express.Router();

//get
router.get("/", (req, res) => {
  const images = getAllImages();
  res.send(images);
});

//post

//delete

//update

module.exports = router;
