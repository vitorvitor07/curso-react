// import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-itens">
        <nav>
          <Link to={"/products"}>Produtos</Link>
        </nav>
        <nav>
          <Link to={"/contact"}>Contato</Link>
        </nav>
      </div>
      <h3>
        <Link to={"/"}>Vitor{"'"}s Shop</Link>
      </h3>
    </div>
  );
};

export default Navbar;
