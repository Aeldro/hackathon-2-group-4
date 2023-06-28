const models = require("../models");

const browseConditions = (req, res) => {
  models.condition
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readCondition = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.condition
    .find(id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browseConditions,
  readCondition,
};
