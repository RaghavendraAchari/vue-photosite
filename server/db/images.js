var images = [
  {
    title: "Bird",
    path: "./assets/images/Bird-edited.JPG",
    original:
      "https://drive.google.com/uc?id=1yNMEuqGCEf3oaPhhe79nflYsQfpmtvCf&export=download",
    date: new Date(2020, 0, 10),
    hits: 90
  },
  {
    title: "Bird 2",
    path: "./assets/images/Bird-edited-2.JPG",
    original:
      "https://drive.google.com/uc?id=1whq9tLIJDaMUUXL6emfuZcXh70ncAOqt&export=download",
    date: new Date(2020, 0, 9),
    hits: 80
  },
  {
    title: "Bird 3",
    path: "./assets/images/Bird-edited-3.JPG",
    original:
      "https://drive.google.com/uc?id=1hHe_fhv4RewwEAO682NywxYjpnjcVfzW&export=download",
    date: new Date(2020, 0, 8),
    hits: 30
  },
  {
    title: "Lamp",
    path: "./assets/images/lamps.jpg",
    original:
      "https://drive.google.com/uc?id=1Oa5TJqAQsEUeAOpwGRMYzzidZod7N5pj&export=download",
    date: new Date(2020, 0, 7),
    hits: 50
  },
  {
    title: "Bird",
    path: "./assets/images/bird.jpg",
    original:
      "https://drive.google.com/uc?id=1CcC26DzGwDjyzm54-56Sv5ShQ_4CIBaG&export=download",
    date: new Date(2020, 0, 6),
    hits: 67
  },
  {
    title: "Aghanashini",
    path: "./assets/images/aghanashini-river-edited.jpeg",
    original:
      "https://drive.google.com/uc?id=17l1HysblpA6PsN50hLSkwbdfNPKd83F9&export=download",
    date: new Date(2020, 0, 5),
    hits: 37
  },
  {
    title: "Mansoon",
    path: "./assets/images/mansoon-edited.jpg",
    original:
      "https://drive.google.com/uc?id=1XJO19yTnN4SVN1LOFic071DeUCvJChUP&export=download",
    date: new Date(2020, 0, 4),
    hits: 79
  },
  {
    title: "Masur",
    path: "./assets/images/masur-river-edited.jpeg",
    original:
      "https://drive.google.com/uc?id=1IJ85puvUbgnAsW6SIhoDNGXuPBp94rSX&export=download",
    date: new Date(2020, 0, 3),
    hits: 75
  },
  {
    title: "Rider",
    path: "./assets/images/rider-edited.jpeg",
    original:
      "https://drive.google.com/uc?id=1OcAh89iNyxmJlBUFVCzVoCCkXholFeVg&export=download",
    date: new Date(2020, 0, 2),
    hits: 86
  },
  {
    title: "Road",
    path: "./assets/images/road-edited.jpg",
    original:
      "https://drive.google.com/uc?id=1Jjwlq-wkOSPwGntx8L9ggYTtXLX2nOvJ&export=download",
    date: new Date(2020, 0, 1),
    hits: 67
  }
];

class Image {
  constructor(title, path, original) {
    this.title = title;
    this.path = path;
    this.original = original;
  }
}

function getAllImages() {
  return images;
}

function addImage(image) {
  images.push(image);
  return images[images.length - 1];
}

// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://:<password>@cluster0.qxwgv.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

module.exports = {
  getAllImages,
  addImage
};
