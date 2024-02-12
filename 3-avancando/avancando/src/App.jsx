import "./App.css";
import MyComponent from "./components/MyComponent";
import MenageData from "./components/MenageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import { useState } from "react";
import CarDatails from "./components/CarDatails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDatails from "./components/UserDatails";

function App() {
  const [name] = useState("Vitor");

  const cars = [
    { id: 0, brand: "Ferrari", color: "Vermelha", newCar: true, km: 0 },
    { id: 1, brand: "Ford", color: "Azul", newCar: false, km: 35000 },
    { id: 2, brand: "Ford", color: "Azul", newCar: false, km: 48000 },
  ];

  const sendMessage = () => console.log("Hello world");

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <div className="container">
        <MyComponent></MyComponent>
      </div>
      <div>
        <MenageData></MenageData>
      </div>
      {/* Renderezização em lista */}
      <div>
        <ListRender></ListRender>
      </div>
      {/* Condicionar em react */}
      <div>
        <ConditionalRender></ConditionalRender>
      </div>
      {/* Usando props */}
      <div>
        <ShowUserName name={name}></ShowUserName>
      </div>
      <div>
        {/* Renderizar em looping */}
        {cars.map(({ id, brand, color, km, newCar }) => (
          <CarDatails
            brand={brand}
            color={color}
            newCar={newCar}
            km={km}
            key={id}
          ></CarDatails>
        ))}
      </div>
      {/* Fragments */}
      <div>
        <Fragment></Fragment>
      </div>
      {/* Children */}
      <div>
        <Container>
          <p>Conteudo envolvido pelo componente Container</p>
        </Container>
      </div>
      {/* Enviar funções por props */}
      <div>
        <ExecuteFunction myFunction={sendMessage}></ExecuteFunction>
      </div>
      {/* state lift */}
      <div>
        {/* Componente que consome o estado */}
        <Message msg={message}></Message>
        {/* Componente que altera o estado */}
        <ChangeMessageState handleMessage={handleMessage}></ChangeMessageState>
      </div>
      {/* Tarefa 4 */}
      <div>
        <UserDatails></UserDatails>
      </div>
    </>
  );
}

export default App;
