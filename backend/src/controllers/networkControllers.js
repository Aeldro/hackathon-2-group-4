const models = require("../models");

const browseNetworks = (req, res) => {
  models.network
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readNetwork = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.network
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

const editNetwork = (req, res) => {
  const network = req.body;
  network.id = parseInt(req.params.id, 10);

  models.network
    .update(network)
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

const addNetwork = (req, res) => {
  const network = req.body;

  models.network
    .insert(network)
    .then(([result]) => {
      res.location(`/networks/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroyNetwork = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.network
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
  browseNetworks,
  readNetwork,
  editNetwork,
  addNetwork,
  destroyNetwork,
};
