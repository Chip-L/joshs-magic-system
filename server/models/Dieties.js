const mongoose = require("mongoose");

const { Schema } = mongoose;

const dietySchema = new Schema({
  dietyName: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  alignment: {
    type: String,
    required: true,
    trim: true,
  },
  followerAlignments: [
    {
      type: String,
    },
  ],
  divineFont: {
    type: String,
    enum: ["heal", "harm", "harm/heal"],
  },
  domains: [
    {
      type: String,
    },
  ],
  favoredWeapon: [
    {
      type: String,
    },
  ],
  source: [
    {
      book: {
        type: Schema.Types.ObjectId,
        ref: "Book",
      },
      page: { type: Number },
    },
  ],
});

const Diety = mongoose.model("Diety", dietySchema);

module.exports = Diety;
