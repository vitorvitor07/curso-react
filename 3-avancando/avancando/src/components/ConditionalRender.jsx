import { useState } from "react";

const ConditionalREnder = () => {
  const [x, setX] = useState(true);

  const [name] = useState("João");

  return (
    <div>
      <h1>Rederização Condicional</h1>
      <div>
        <h3>Se X = true, será exibido</h3>
        {x && <p>X = true</p>}
        {!x && <p>X = false</p>}
        <button onClick={() => setX(!x)}>Change X state</button>
      </div>
      <div>
        {name === "João" ? <h3>O Nome é João</h3> : <h3>Nome não é João</h3>}
      </div>
    </div>
  );
};

export default ConditionalREnder;
