// import React from 'react'

const ChangeMessageState = ({ handleMessage }) => {
  const messages = ["Olá", "Oi", "Salve", "Eaí? Bão?"];
  return (
    <div>
      {messages.map((message, index) => (
        <button key={index} onClick={() => handleMessage(message)}>
          Alterar mensagem para: &quot;{message}&quot;
        </button>
      ))}
    </div>
  );
};

export default ChangeMessageState;
