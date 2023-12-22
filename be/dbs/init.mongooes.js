const mongoose = require("mongoose");
const config = require("../config/db.config");
const connectString = config.url;
class Database {
  constructor() {
    this.connect();
  }
  connect() {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectString, {
        maxPoolSize: 50,
      })
      .then(() => console.log("Connected Success!!! " + connectString))
      .catch(() => console.log("Connect database error"));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongoDb = Database.getInstance();

module.exports = instanceMongoDb;
