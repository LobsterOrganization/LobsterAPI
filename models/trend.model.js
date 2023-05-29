const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trendSchema = new Schema(
  {
    mots: {
      type: String,
      required: true,
    }
  },
  {
    collection: "FreqOcc",
    timestamps: true,
  }
);

const Trend = mongoose.model("Trend", trendSchema);
module.exports = Trend;
