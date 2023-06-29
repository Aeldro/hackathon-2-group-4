const AbstractManager = require("./AbstractManager");

class NetworkManager extends AbstractManager {
  constructor() {
    super({ table: "network" });
  }

  insert(network) {
    const { name } = network;
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      name,
    ]);
  }

  update(network) {
    const { id, name } = network;
    return this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [name, id]
    );
  }
}

module.exports = NetworkManager;
