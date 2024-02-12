// Importando o CSS para esse componente
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 13;
  const redTitle = true;
  return (
    <div>
      {/* Css global => index.css */}
      <h1>React com CSS</h1>
      {/* Css no componente */}
      <MyComponent></MyComponent>
      {/* Css inline */}
      <p style={{ color: "red", height: "50px" }}>Css inline</p>
      {/* CSS inline dinâmico  */}
      <p
        style={
          n < 10
            ? { color: "red", height: "50px" }
            : { color: "pink", height: "50px" }
        }
      >
        Css inline dinâmico
      </p>
      <p
        style={
          n > 10
            ? { color: "red", height: "50px" }
            : { color: "pink", height: "50px" }
        }
      >
        Css inline dinâmico
      </p>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Classe dinâmica</h2>
      {/* CSS Modules */}
      <Title></Title>
    </div>
  );
}

export default App;
