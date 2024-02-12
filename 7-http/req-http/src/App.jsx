import { useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  // const [products, setProducts] = useState([]);

  const { data: itens, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Fetch data
  // useEffect(() => {
  //   const url = `http://localhost:3000/products`;
  //   async function getProducts() {
  //     const response = await fetch(url);
  //     const data = await response.json();

  //     setProducts(data);
  //   }

  //   getProducts();
  // }, []);

  // Adicionar product
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { name, price };

    // const res = await fetch("http://localhost:3000/products", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(product),
    // });

    // const result = await res.json();

    // // Carregamento dinâmico
    // setProducts((actualProduct) => [...actualProduct, result]);

    httpConfig(product, "POST");

    // Limpar input
    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h3>Lista de produtos</h3>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <ul>
          {itens &&
            itens.map(({ id, name, price }) => (
              <li key={id}>
                {name} - R${price}
              </li>
            ))}
        </ul>
      )}
      <h3>Adicionando produtos</h3>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {loading && <input type="submit" value="Aguarde" disabled />}
          {!loading && <input type="submit" value="Adicionar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
