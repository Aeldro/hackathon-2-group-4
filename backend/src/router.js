const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const {
  browseRams,
  readRam,
  editRam,
  addRam,
  destroyRam,
} = require("./controllers/ramControllers");
const {
  browseCategories,
  readCategory,
  editCategory,
  addCategory,
  destroyCategory,
} = require("./controllers/categoryControllers");
const {
  browseStorages,
  readStorage,
  editStorage,
  addStorage,
  destroyStorage,
} = require("./controllers/storageControllers");

const {
  browseConditions,
  readCondition,
} = require("./controllers/conditionControllers");

const {
  browseUsers,
  readUser,
  editUser,
  addUser,
  destroyUser,
  getUserByUsername,
  verifyPassword,
  verifyUsernameForSubscription,
  hashPassword,
  postUser,
} = require("./controllers/userControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/users", browseUsers);
router.post("/login", getUserByUsername, verifyPassword);
router.post("/register", verifyUsernameForSubscription, hashPassword, postUser);

router.get("/users/:id", readUser);
router.put("/users/:id", editUser);
router.post("/users", addUser);
router.delete("/users/:id", destroyUser);

router.get("/ram", browseRams);
router.get("/ram/:id", readRam);
router.put("/ram/:id", editRam);
router.post("/ram", addRam);
router.delete("/ram/:id", destroyRam);

router.get("/categories", browseCategories);
router.get("/categories/:id", readCategory);
router.put("/categories/:id", editCategory);
router.post("/categories", addCategory);
router.delete("/categories/:id", destroyCategory);

router.get("/storage", browseStorages);
router.get("/storage/:id", readStorage);
router.put("/storage/:id", editStorage);
router.post("/storage", addStorage);
router.delete("/storage/:id", destroyStorage);

router.get("/conditions", browseConditions);
router.get("/conditions/:id", readCondition);

module.exports = router;
