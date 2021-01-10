const express = require("express");
const router = express.Router();

const adminsList = require("../../db/adminDB");

//login
router.post("/login", (req, res) => {
  console.log("in login");
  const admins = adminsList.getAdmins();
  console.log(admins.toString());
  console.log(req.body);
  const user = req.body;
  const loggedInUser = admins.find(
    admin =>
      admin.userName === user.userName && admin.password === user.password
  );
  console.log(loggedInUser);
  if (loggedInUser != null) {
    res.status(200).send(loggedInUser);
    return;
  }
  res.status(404).send("No Admin Found");
});

//upload a photo
router.post("/upload", (req, res) => {
  res.send(comments.addComment(req.body));
});

module.exports = router;
