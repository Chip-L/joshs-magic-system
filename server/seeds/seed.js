const db = require("../config/connection");
const { Book, Diety } = require("../models");

const books = require("./Books");
const dieties = require("./Dieties");

db.once("open", async () => {
  try {
    console.log("book:\n", books[0]);

    console.log("\n\nNow it is time to clear the books!:");
    await Book.deleteMany({});
    console.log("\n\nLet's put them back in!:");
    await Book.insertMany(books);

    console.log("\n\nNow can we find them and display them?");
    Book.find({}, function (err, docs) {});

    console.log(docs);

    // await Diety.deleteMany({});
    // for(let i=0; i<dieties.length; i++) {

    // }

    console.log("all done!");
    process.exit(0);
  } catch {
    (err) => console.log("Seed book error", err);
  }
});
