// import { useState } from "react";
import MyForm from "./components/MyForm";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Form</h2>
      <MyForm user={{ name: "Vitor", email: "vitor@vitor.com" }}></MyForm>
    </div>
  );
}

export default App;
