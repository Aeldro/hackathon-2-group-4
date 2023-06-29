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
  browseIntegrities,
  readIntegrity,
  editIntegrity,
  addIntegrity,
  destroyIntegrity,
} = require("./controllers/integrityControllers");

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
  verifyToken,
  getUserByIdFromPayload,
  getAdminByIdFromPayload,
} = require("./controllers/userControllers");

const {
  browseNetworks,
  readNetwork,
  editNetwork,
  addNetwork,
  destroyNetwork,
} = require("./controllers/networkControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/get-user", verifyToken, getUserByIdFromPayload);
router.get("/get-admin", verifyToken, getAdminByIdFromPayload);

router.get("/users", browseUsers);
router.post("/login", getUserByUsername, verifyPassword);
router.post("/register", verifyUsernameForSubscription, hashPassword, postUser);

router.get("/users/:id", readUser);
router.put("/users/:id", editUser);
router.post("/users", addUser);
router.delete("/users/:id", destroyUser);

router.get("/rams", browseRams);
router.get("/rams/:id", readRam);
router.put("/rams/:id", editRam);
router.post("/rams", addRam);
router.delete("/rams/:id", destroyRam);

router.get("/categories", browseCategories);
router.get("/categories/:id", readCategory);
router.put("/categories/:id", editCategory);
router.post("/categories", addCategory);
router.delete("/categories/:id", destroyCategory);

router.get("/storages", browseStorages);
router.get("/storages/:id", readStorage);
router.put("/storages/:id", editStorage);
router.post("/storages", addStorage);
router.delete("/storages/:id", destroyStorage);

router.get("/integrities", browseIntegrities);
router.get("/integrities/:id", readIntegrity);
router.put("/integrities/:id", editIntegrity);
router.post("/integrities", addIntegrity);
router.delete("/integrities/:id", destroyIntegrity);

router.get("/networks", browseNetworks);
router.get("/networks/:id", readNetwork);
router.put("/networks/:id", editNetwork);
router.post("/networks", addNetwork);
router.delete("/networks/:id", destroyNetwork);

module.exports = router;
