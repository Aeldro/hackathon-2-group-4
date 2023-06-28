const AbstractManager = require("./AbstractManager");

class ConditionManager extends AbstractManager {
  constructor() {
    super({ table: "condition" });
  }
}

module.exports = ConditionManager;
