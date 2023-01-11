const AbstractManager = require("./AbstractManager");

class VehicleManager extends AbstractManager {
  constructor() {
    super({ table: "vehicle" });
  }

  insert(vehicle) {
    return this.connection.query(`insert into ${this.table} SET ?`, [vehicle]);
  }

  update(vehicle) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      vehicle,
      vehicle.id,
    ]);
  }
}

module.exports = VehicleManager;
