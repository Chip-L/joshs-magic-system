const db = require("../config/connection");
const { Book, Diety } = require("../models");

const books = require("./Books");
const dieties = require("./Dieties");

db.once("open", async () => {
  try {
    await Book.deleteMany({});
    await Book.insertMany(books);

    Book.find({}, function (err, docs) {});

    console.log(docs);

    // await Diety.deleteMany({});
    // for(let i=0; i<dieties.length; i++) {

    // }
  } catch {
    (err) => console.log("Seed book error", err);
  }
});
