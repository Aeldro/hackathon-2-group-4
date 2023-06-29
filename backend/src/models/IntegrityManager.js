const AbstractManager = require("./AbstractManager");

class ConditionManager extends AbstractManager {
  constructor() {
    super({ table: "integrity" });
  }

  insert(integrity) {
    const { name, description, value } = integrity;
    return this.database.query(
      `insert into ${this.table} (name, description, value) values (?, ?, ?)`,
      [name, description, value]
    );
  }

  update(integrity) {
    const { id, name, description, value } = integrity;
    return this.database.query(
      `update ${this.table} set name = ?, description = ?, value = ? where id = ?`,
      [name, description, value, id]
    );
  }
}

module.exports = ConditionManager;
