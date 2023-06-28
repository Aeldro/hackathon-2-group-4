const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const ramControllers = require("./controllers/ramControllers");
const categoryControllers = require("./controllers/categoryControllers");
const storageControllers = require("./controllers/storageControllers");
const conditionControllers = require("./controllers/conditionControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

router.get("/ram", ramControllers.browse);
router.get("/ram/:id", ramControllers.read);
router.put("/ram/:id", ramControllers.edit);
router.post("/ram", ramControllers.add);
router.delete("/ram/:id", ramControllers.destroy);

router.get("/categories", categoryControllers.browse);
router.get("/categories/:id", categoryControllers.read);
router.put("/categories/:id", categoryControllers.edit);
router.post("/categories", categoryControllers.add);
router.delete("/categories/:id", categoryControllers.destroy);

router.get("/storage", storageControllers.browse);
router.get("/storage/:id", storageControllers.read);
router.put("/storage/:id", storageControllers.edit);
router.post("/storage", storageControllers.add);
router.delete("/storage/:id", storageControllers.destroy);

router.get("/conditions", conditionControllers.browse);
router.get("/conditions/:id", conditionControllers.read);

module.exports = router;
