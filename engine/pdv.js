const SqliteStorage = require("../local_storage/sqlite");
const PdvAPI = require("../server/pdv");
class PdvEngine {

  findAll() {
    const productsStorage = SqliteStorage.findAll();
    if(productsStorage === null || productsStorage.length === 0) {
      return PdvAPI.findAll();
    }

    return productsStorage;
  }

  save(product) {
    if(product === null) {
      console.warn("Unable to save a null product.");
      return;
    }
  
    SqliteStorage.save(product);
    PdvAPI.save(product);
  }
}

module.exports = new PdvEngine();