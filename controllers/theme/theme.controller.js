const Theme = require("../../models/theme.model");
const config = require("config");

var themeController = {
  /**
   * Get all trends
   */
  getTheme: async (req, res, next) => {
    try {
      
      let trends = await Theme.find({}).lean().exec();
      const allResults = [].concat(trends);
      const jsonData = JSON.stringify(allResults.map(item => ({ _id: item._id, Thème: item.Thème, Count: item.Count })));
      console.log("THEME", jsonData)
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


module.exports = themeController;