const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const models = require("../models");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const browseUsers = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readUser = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.user
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

const editUser = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  user.id = parseInt(req.params.id, 10);

  models.user
    .update(user)
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

const addUser = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  models.user
    .insert(user)
    .then(([result]) => {
      res.location(`/items/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroyUser = (req, res) => {
  models.user
    .delete(req.params.id)
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

// Auth

const getUserByUsername = (req, res, next) => {
  models.user
    .findUserByUsername(req.body.username)
    .then(([result]) => {
      if (result.length) {
        // eslint-disable-next-line prefer-destructuring
        req.user = result[0];
        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const verifyPassword = (req, res) => {
  argon2
    .verify(req.user.hashed_password, req.body.password)
    .then((valid) => {
      if (valid) {
        const payload = {
          sub: req.user.id,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        delete req.user.hashed_password;
        res.send({ token, user: req.user }).status(200);
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const verifyUsernameForSubscription = (req, res, next) => {
  models.user
    .findUserByUsername(req.body.username)
    .then(([result]) => {
      if (!result.length) {
        next();
      } else {
        res.sendStatus(403);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.password;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postUser = (req, res) => {
  models.user
    .createUser(req.body)
    .then(() => {
      res.status(201).send("L'utilisateur a bien été créé.");
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    const [type, token] = authorizationHeader.split(" ");
    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }
    req.payload = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

const getUserByIdFromPayload = (req, res) => {
  const { sub } = req.payload;

  models.user
    .find(sub)
    .then(([users]) => {
      if (users[0] !== null) {
        // console.log(users[0]);
        res.status(200).json(users[0]);
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getAdminByIdFromPayload = (req, res) => {
  const { sub } = req.payload;

  models.user
    .find(sub)
    .then(([users]) => {
      if (users[0] !== null && users[0].is_admin) {
        // console.log(users[0]);
        res.status(200).json(users[0]);
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
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
};
