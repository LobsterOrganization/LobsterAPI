const Trend = require("../../models/trend.model");
const config = require("config");

var trendController = {
  /**
   * Get all trends
   */
  getTrends: async (req, res, next) => {
    try {
      
      let trends = await Trend.find({}).lean().exec();
      const allResults = [].concat(trends);
      const jsonData = JSON.stringify(allResults.map(item => ({ _id: item._id, mots: item.mots, freq: item.freq })));
      console.log("Saarh", jsonData)
      return res.send(jsonData);
  } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Add trend
   */
  addOne: async (req, res, next) => {
    try {
      let trend = await Trend.create(req.body);
      return res.json(trend);
    } catch (err) {
      console.err(err);
      return next(err);
    }
  }
};


module.exports = trendController;
