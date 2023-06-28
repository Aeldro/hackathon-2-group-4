const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findUserByUsername(user) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE username = ?`,
      [user]
    );
  }

  createUser(user) {
    return this.database.query(
      `INSERT INTO ${this.table} SET username = ?, hashed_password = ?, is_admin = ?`,
      [user.username, user.hashedPassword, user.isAdmin]
    );
  }
}

module.exports = UserManager;
