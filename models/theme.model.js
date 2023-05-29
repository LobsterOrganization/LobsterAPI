const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trendSchema = new Schema(
  
  {
    Thème: {
      type: String,
      required: true,
    },
    Count: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "themeTrends",
    timestamps: true,
  }
);

const Theme = mongoose.model("Theme", trendSchema);
module.exports = Theme;
