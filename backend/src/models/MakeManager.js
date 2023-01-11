const AbstractManager = require("./AbstractManager");

class MakeManager extends AbstractManager {
  constructor() {
    super({ table: "make" });
  }

  insert(make) {
    return this.connection.query(`insert into ${this.table} SET ?`, [make]);
  }

  update(make) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      make,
      make.id,
    ]);
  }
}

module.exports = MakeManager;
