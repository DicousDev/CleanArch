import PdvEngine from "../../engine/pdv";

export const InsertProduct = () => {

  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  
  function handlerInsert() {
    const product = {
      id: null,
      name: name,
      price: price
    };

    PdvEngine.save(product);
  }

  return (
    <div>
      <h1>Insira um produto</h1>
      <input placeholder="Nome" value={name} onChange={(event) => setName(event.target.value)} />
      <input placeholder="Preço" value={price} onChange={(event) => setPrice(event.target.value)} />
      <button onClick={handlerInsert}>Confirmar</button>
    </div>
  );
}