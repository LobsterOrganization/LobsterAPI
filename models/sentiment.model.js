const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trendSchema = new Schema(
  
  {
    Date: {
      type: String,
      required: true,
    },
    Negatif: {
      type: Number,
      required: true,
    },
    Neutre: {
      type: Number,
      required: true,
    },
    Positif: {
      type: Number,
      required: true,
    }
  },
  {
    collection: "SentimentCounter",
    timestamps: true,
  }
);

const Sentiment = mongoose.model("Sentiment", trendSchema);
module.exports = Sentiment;
