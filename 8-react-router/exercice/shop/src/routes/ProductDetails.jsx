import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();

  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    if (name || price || !id) return;

    const fetchProducts = async () => {
      try {
        const url = `http://localhost:3000/products/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        if (!data) throw new Error("Couldn't fetch data");
        setName(data.name);
        setPrice(data.price);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [name, price, id]);

  return (
    <div className="details">
      <div className="info">
        <div className="image">
          <p>Foto do Produto</p>
        </div>
        <div className="details-div">
          <span className="title">{name && name}</span>
          <span className="price">R$ {price && price}</span>
          <p>Em até 10x sem juros ou 10% no Pix</p>
          <a href="#">Comprar</a>
        </div>
      </div>
      <div className="nav-details">
        <Link to={"/products"}>Voltar</Link>
        <Link to={"/"}>Início</Link>
      </div>
    </div>
  );
};

export default ProductDetails;
