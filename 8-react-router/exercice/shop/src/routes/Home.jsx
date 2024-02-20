import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>Welcome to Vitor{"'"}s Shop</h1>
        <p>
          Descubra as melhores ofertas em produtos exclusivos que você não
          encontrará em nenhum outro lugar!
        </p>
      </header>
      <section className="display">
        <div>
          <Link to={"/products"}>Conferir Produtos</Link>
        </div>
        <div>
          <Link to={"/product/2"}>Estou com sorte!</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
