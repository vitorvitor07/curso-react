// import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <div>
        <Link to={"/Random"}>Don&apos;t Click</Link>
      </div>
    </nav>
  );
};

export default Navbar;
