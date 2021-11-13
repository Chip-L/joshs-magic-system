const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema({
  bookName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  system: {
    type: String,
    required: true,
    trim: true,
  },
  author: [
    {
      firstName: { type: String },
      lastName: { type: String },
    },
  ],
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
