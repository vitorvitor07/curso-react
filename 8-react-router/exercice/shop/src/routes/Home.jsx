import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>Welcome to Vitor{"'"}s Shop</h1>
        <p>Melhores produtos roubados você só encontra aqui</p>
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
