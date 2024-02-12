import { useState } from "react";

const MenageData = () => {
  // let value = 10;

  // useState
  // const [ nome da daviável, nome da função que irá settar o valor ] = useState(Valor incial);
  const [number, setNumber] = useState(15);

  return (
    <div>
      <h1>Contador</h1>
      {/* <div>
        <p>Sem useState</p>
        <p>Vezes: {value}</p>
        <button onClick={() => value + 1}>Aumentar</button>
      </div> */}
      <div>
        {/* <p>Com useState</p> */}

        <p>{number} vezes</p>
        {/* Para alterar o valor usamos setNumber(VALOR A SER DEFINIDO) */}
        <button onClick={() => setNumber(number + 1)}>Aumentar</button>
      </div>
    </div>
  );
};

export default MenageData;
