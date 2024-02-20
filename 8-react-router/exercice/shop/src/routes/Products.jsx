import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (products) return;
    const fetchProducts = async () => {
      try {
        const url = "http://localhost:3000/products";
        const response = await fetch(url);
        const data = await response.json();
        if (!data) throw new Error("Couldn't fetch data");
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [products]);

  return (
    <div className="products">
      <h2>Destaques da Semana</h2>
      <p>Os melhores produtos dos caminhões tombados</p>
      <div>
        <ul>
          {products &&
            products.map((product) => (
              <li key={product.id}>
                <div className="image">
                  <div>Foto do produto</div>
                </div>
                <div>{product.name}</div>
                <div>R$ {product.price}</div>
                <div className="details">
                  <Link to={`/product/${product.id}`}>Detalhes</Link>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="nav">
        <Link to={"/"}>Voltar</Link>
      </div>
    </div>
  );
};

export default Products;
