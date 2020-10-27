require("dotenv").config({ silent: true });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

const images = require("./routes/api/images");
const comments = require("./routes/api/comments");
const socialLink = require("./routes/api/socialLinks");

app.use("/api/images", images);
app.use("/api/comments", comments);
app.use("/api/social-links", socialLink);

// if (process.env.NODE_ENV == "production") {
app.use(express.static(__dirname + "/public/"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
// }

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
