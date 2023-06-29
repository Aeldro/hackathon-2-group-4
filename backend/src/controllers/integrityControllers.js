const models = require("../models");

const browseIntegrities = (req, res) => {
  models.integrity
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readIntegrity = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.integrity
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

const editIntegrity = (req, res) => {
  const integrity = req.body;
  integrity.id = parseInt(req.params.id, 10);

  models.integrity
    .update(integrity)
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

const addIntegrity = (req, res) => {
  const integrity = req.body;

  models.integrity
    .insert(integrity)
    .then(([result]) => {
      res.location(`/integrities/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroyIntegrity = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.integrity
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
  browseIntegrities,
  readIntegrity,
  editIntegrity,
  addIntegrity,
  destroyIntegrity,
};
