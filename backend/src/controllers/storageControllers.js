const models = require("../models");

const browseStorages = (req, res) => {
  models.storage
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readStorage = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.storage
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

const editStorage = (req, res) => {
  const storage = req.body;
  storage.id = parseInt(req.params.id, 10);
  models.storage
    .update(storage)
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

const addStorage = (req, res) => {
  const storage = req.body;
  models.storage
    .insert(storage)
    .then(([result]) => {
      res.location(`/storage/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroyStorage = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.storage
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
  browseStorages,
  readStorage,
  editStorage,
  addStorage,
  destroyStorage,
};
