const models = require("../models");

const browseCategories = (req, res) => {
  models.category
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readCategory = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.category
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

const editCategory = (req, res) => {
  const category = req.body;
  category.id = parseInt(req.params.id, 10);
  models.category
    .update(req.body)
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

const addCategory = (req, res) => {
  const category = req.body;
  models.category
    .insert(category)
    .then(([result]) => {
      res.location(`/categories/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroyCategory = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.category
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
  browseCategories,
  readCategory,
  editCategory,
  addCategory,
  destroyCategory,
};
