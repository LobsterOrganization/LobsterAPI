const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetsSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    retweets: {
      type: Number,
      required: false,
    },
    quotes: {
      type: Number,
      required: false,
    },
    hearts: {
      type: Number,
      required: false,
    },
    link: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    collection: "tweets",
    timestamps: true,
  }
);

const Node = mongoose.model("tweets", tweetsSchema);
module.exports = Node;
