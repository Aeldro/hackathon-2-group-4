/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  insert(category) {
    const { name, color, min_price, max_price } = category;
    return this.database.query(
      `insert into ${this.table} (name, color, min_price, max_price) values (?, ?, ?, ?)`,
      [name, color, min_price, max_price]
    );
  }

  update(category) {
    const { id, name, color, min_price, max_price } = category;
    return this.database.query(
      `update ${this.table} set name = ?, color = ?, min_price = ?, max_price = ? where id = ?`,
      [name, color, min_price, max_price, id]
    );
  }
}

module.exports = CategoryManager;
