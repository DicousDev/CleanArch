class SqliteStorage {

  findAll() {
    console.log("Find all in local storage!");
    return [];
  }

  save(product) {
    console.log("Product successfully saved!");
  }
}

module.exports = new SqliteStorage();