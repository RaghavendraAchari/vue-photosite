const express = require("express");
const getSocialLinks = require("./../../db/socialLinks");

const router = express.Router();

//get
router.get("/", (req, res) => {
  const links = getSocialLinks();
  res.send(links);
});

//post

//delete

//update

module.exports = router;
