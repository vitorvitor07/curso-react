// import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0);
  // const navigate = useNavigate();

  return (
    <div className="app">
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <footer>
        <button onClick={() => navigate("/contact")}>Fale conosco</button>
      </footer> */}
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
