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

  insert(user) {
    const { username, password, isAdmin } = user;
    return this.database.query(
      `insert into ${this.table} (username, password, isAdmin) values (?, ?, ?)`,
      [username, password, isAdmin]
    );
  }

  update(user) {
    const { id, username, password, isAdmin } = user;
    return this.database.query(
      `update ${this.table} set username = ?, password = ?, isAdmin = ? where id = ?`,
      [username, password, isAdmin, id]
    );
  }
}

module.exports = UserManager;
