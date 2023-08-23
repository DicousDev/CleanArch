import PdvEngine from "../../engine/pdv";

export const ProductDashboard = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(PdvEngine.findAll());
  }, []);


  // Render all products
  return (
    <div>
      {
        products.map(p => <h1>{p.name}</h1>)
      }
    </div>
  );
}