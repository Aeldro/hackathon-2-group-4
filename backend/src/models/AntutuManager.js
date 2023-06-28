const AbstractManager = require("./AbstractManager");

class AntutuManager extends AbstractManager {
  constructor() {
    super({ table: "antutu" });
  }

  getRange(antutu) {
    const { minAntutu, maxAntutu } = antutu;
    return this.database.query(
      `select minAntutu, maxAntutu from ${this.table}`,
      [minAntutu, maxAntutu]
    );
  }

  insert(antutu) {
    const { minAntutu, maxAntutu, value } = antutu;
    return this.database.query(
      `insert into ${this.table} (min_antutu, max_antutu, value) values (?, ?)`,
      [minAntutu, maxAntutu, value]
    );
  }

  update(antutu) {
    const { id, minAntutu, maxAntutu, value } = antutu;
    return this.database.query(
      `update ${this.table} set min_antutu = ?, max_antutu = ?, value = ? where id = ?`,
      [minAntutu, maxAntutu, value, id]
    );
  }
}

module.exports = AntutuManager;
