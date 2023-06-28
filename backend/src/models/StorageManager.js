const AbstractManager = require("./AbstractManager");

class StorageManager extends AbstractManager {
  constructor() {
    super({ table: "storage" });
  }

  insert(storage) {
    const { name, value } = storage;
    return this.database.query(
      `insert into ${this.table} (name, value) values (?, ?)`,
      [name, value]
    );
  }

  update(storage) {
    const { id, name, value } = storage;
    return this.database.query(
      `update ${this.table} set name = ?, value = ? where id = ?`,
      [name, value, id]
    );
  }
}

module.exports = StorageManager;
