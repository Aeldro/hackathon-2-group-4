const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const {
  getUserByUsername,
  verifyPassword,
  verifyUsernameForSubscription,
  hashPassword,
  postUser,
  // verifyToken,
  // deleteUser,
} = require("./controllers/userControllers");
const userControllers = require("./controllers/userControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// router.get("/get_user", userControllers.verifyToken, );

router.get("/users", userControllers.browse);
router.post("/login", getUserByUsername, verifyPassword);
router.post("/register", verifyUsernameForSubscription, hashPassword, postUser);
// router.delete("/users/:id", deleteUser);

module.exports = router;
