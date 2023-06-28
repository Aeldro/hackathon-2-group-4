const models = require("../models");

const browseRams = (req, res) => {
  models.ram
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readRam = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.ram
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

const editRam = (req, res) => {
  const ram = req.body;
  ram.id = parseInt(req.params.id, 10);
  models.ram
    .update(ram)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addRam = (req, res) => {
  const ram = req.body;
  models.ram
    .insert(ram)
    .then(([result]) => {
      res.location(`/rams/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroyRam = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.ram
    .delete(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browseRams,
  readRam,
  editRam,
  addRam,
  destroyRam,
};
