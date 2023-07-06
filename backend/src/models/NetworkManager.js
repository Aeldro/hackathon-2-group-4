const AbstractManager = require("./AbstractManager");

class NetworkManager extends AbstractManager {
  constructor() {
    super({ table: "network" });
  }

  insert(network) {
    const { name, value } = network;
    return this.database.query(
      `insert into ${this.table} (name,value) values (?, ?)`,
      [name, value]
    );
  }

  update(network) {
    const { id, name, value } = network;
    return this.database.query(
      `update ${this.table} set name = ?, value = ? where id = ?`,
      [name, value, id]
    );
  }
}

module.exports = NetworkManager;
