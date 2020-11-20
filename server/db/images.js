var images = [
  {
    title: "Bird",
    path: "./assets/images/Bird-edited.JPG",
    original:
      "https://drive.google.com/uc?id=1yNMEuqGCEf3oaPhhe79nflYsQfpmtvCf&export=download",
    date: new Date(2020, 0, 10),
    hits: 90,
    thumbnail:
      "https://drive.google.com/file/d/1TJmqeG4UCY3DrYwm9Rt36lb_hRyNknaO/view?usp=sharing"
  },
  {
    title: "Bird 2",
    path: "./assets/images/Bird-edited-2.JPG",
    original:
      "https://drive.google.com/uc?id=1whq9tLIJDaMUUXL6emfuZcXh70ncAOqt&export=download",
    date: new Date(2020, 0, 9),
    hits: 80,
    thumbnail:
      "https://drive.google.com/file/d/1ovXZzZVqIjWjybdzkcj-oD0O1Q1RZxhQ/view?usp=sharing"
  },
  {
    title: "Bird 3",
    path: "./assets/images/Bird-edited-3.JPG",
    original:
      "https://drive.google.com/uc?id=1hHe_fhv4RewwEAO682NywxYjpnjcVfzW&export=download",
    date: new Date(2020, 0, 8),
    hits: 30,
    thumbnail:
      "https://drive.google.com/file/d/1GZtwt_5d1G8j4CoNUzBxuxXHeJQ2KGX_/view?usp=sharing"
  },
  {
    title: "Lamp",
    path: "./assets/images/lamps.jpg",
    original:
      "https://drive.google.com/uc?id=1Oa5TJqAQsEUeAOpwGRMYzzidZod7N5pj&export=download",
    date: new Date(2020, 0, 7),
    hits: 50,
    thumbnail:
      "https://drive.google.com/file/d/1kS_1CBcL3MIZRTZ1DFQiU6GC-yDxr14f/view?usp=sharing"
  },
  {
    title: "Bird",
    path: "./assets/images/bird.jpg",
    original:
      "https://drive.google.com/uc?id=1CcC26DzGwDjyzm54-56Sv5ShQ_4CIBaG&export=download",
    date: new Date(2020, 0, 6),
    hits: 67,
    thumbnail:
      "https://drive.google.com/file/d/1W88_nawn-Hg13VYu3xn1phjYUs1bomfH/view?usp=sharing"
  },
  {
    title: "Aghanashini",
    path: "./assets/images/aghanashini-river-edited.jpeg",
    original:
      "https://drive.google.com/uc?id=17l1HysblpA6PsN50hLSkwbdfNPKd83F9&export=download",
    date: new Date(2020, 0, 5),
    hits: 37,
    thumbnail:
      "https://drive.google.com/file/d/1fyDzlkK_as-jqPSmfn1UST7PdSzySzmX/view?usp=sharing"
  },
  {
    title: "Mansoon",
    path: "./assets/images/mansoon-edited.jpg",
    original:
      "https://drive.google.com/uc?id=1XJO19yTnN4SVN1LOFic071DeUCvJChUP&export=download",
    date: new Date(2020, 0, 4),
    hits: 79,
    thumbnail:
      "https://drive.google.com/file/d/16OKnBQwRSacOf_fZlbWqkPXJiXf9mC4c/view?usp=sharing"
  },
  {
    title: "Masur",
    path: "./assets/images/masur-river-edited.jpeg",
    original:
      "https://drive.google.com/uc?id=1IJ85puvUbgnAsW6SIhoDNGXuPBp94rSX&export=download",
    date: new Date(2020, 0, 3),
    hits: 75,
    thumbnail:
      "https://drive.google.com/file/d/1pHlYZ9NFG3s4JDgOYbOXDiXLsTi88xU3/view?usp=sharing"
  },
  {
    title: "Rider",
    path: "./assets/images/rider-edited.jpeg",
    original:
      "https://drive.google.com/uc?id=1OcAh89iNyxmJlBUFVCzVoCCkXholFeVg&export=download",
    date: new Date(2020, 0, 2),
    hits: 86,
    thumbnail:
      "https://drive.google.com/file/d/1F5ApKc7v3LZa3ih_yFZkzuIMoj--bhrA/view?usp=sharing"
  },
  {
    title: "Road",
    path: "./assets/images/road-edited.jpg",
    original:
      "https://drive.google.com/uc?id=1Jjwlq-wkOSPwGntx8L9ggYTtXLX2nOvJ&export=download",
    date: new Date(2020, 0, 1),
    hits: 67,
    thumbnail:
      "https://drive.google.com/file/d/1IuROJvTlZtxBZDCrR5R_PVHxEQw8lDsH/view?usp=sharing"
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
