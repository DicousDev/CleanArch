class PdvAPI {

  findAll() {
    console.log("Find all in API!");
    return [];
  }

  save(product) {
    console.log("Product shipped successfully!");
  }
}

module.exports = new PdvAPI();