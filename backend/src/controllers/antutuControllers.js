const models = require("../models");

const browseRange = (req, res) => {
  const { minAntutu, maxAntutu } = req.body;
  models.antutu
    .getRange({ minAntutu, maxAntutu })
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.send(result);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = browseRange;
