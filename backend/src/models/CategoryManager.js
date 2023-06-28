const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(category) {
    const { name, color, minPrice, maxPrice } = category;
    return this.database.query(
      `insert into ${this.table} (name, color, min_price, max_price) values (?, ?, ?)`,
      [name, color, minPrice, maxPrice]
    );
  }

  update(category) {
    const { id, name, color, minPrice, maxPrice } = category;
    return this.database.query(
      `update ${this.table} set name = ?, color = ?, min_price = ?, max_price = ? where id = ?`,
      [name, color, minPrice, maxPrice, id]
    );
  }
}

module.exports = CategoryManager;