const AbstractManager = require("./AbstractManager");

class RamManager extends AbstractManager {
  constructor() {
    super({ table: "ram" });
  }

  insert(ram) {
    const { name, value } = ram;
    return this.database.query(
      `insert into ${this.table} (name, value) values (?, ?)`,
      [name, value]
    );
  }

  update(ram) {
    const { id, name, value } = ram;
    return this.database.query(
      `update ${this.table} set name = ?, value = ? where id = ?`,
      [name, value, id]
    );
  }
}

module.exports = RamManager;