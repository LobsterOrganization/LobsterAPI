const Sentiment = require("../../models/sentiment.model");
const config = require("config");

var sentimentController = {
  /**
   * Get all trends
   */
  getSentiment: async (req, res, next) => {
    try {
      
      let trends = await Sentiment.find({}).lean().exec();
      const allResults = [].concat(trends);
      const jsonData = JSON.stringify(allResults.map(item => ({ _id: item._id, Date: item.Date, Negatif: item.Negatif, Neutre: item.Neutre, Positif: item.Positif })));
      console.log("SENTIMENT", jsonData)
      return res.send(jsonData);
  } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Add trend
   * 
   */


  addOne: async (req, res, next) => {
    try {
      let trend = await Sentiment.create(req.body);
      return res.json(trend);
    } catch (err) {
      console.err(err);
      return next(err);
    }
  }
};


module.exports = sentimentController;