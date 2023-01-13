const AbstractManager = require("./AbstractManager");

class VtypeManager extends AbstractManager {
  constructor() {
    super({ table: "vtype" });
  }

  insert(vtype) {
    return this.connection.query(`insert into ${this.table} SET ?`, [vtype]);
  }

  update(vtype) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      vtype,
      vtype.id,
    ]);
  }
}

module.exports = VtypeManager;
