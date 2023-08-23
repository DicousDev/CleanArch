class PdvModels {

  createToSave(id, name, price) {

    if(name === null || price == null) {
      console.warn("Name or price cannot be null to create a PDV product");
      return;
    }

    return {
      id: id,
      name: name,
      price: price
    };
  }
}

module.exports = new PdvModels();