// import React from 'react'

const ExecuteFunction = ({ myFunction }) => {
  myFunction();
  return (
    <div>
      <h1>Executar função através de uma prop</h1>
      <button onClick={myFunction}>Executar função</button>
    </div>
  );
};

export default ExecuteFunction;
