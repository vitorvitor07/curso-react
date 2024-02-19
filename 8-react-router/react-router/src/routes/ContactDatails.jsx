// import React from 'react'
import { useParams, useNavigate } from "react-router-dom";

const ContactDatails = () => {
  const { id } = useParams();

  // 6 - redirect
  const navigate = useNavigate();
  const handleContact = () => {
    alert("Contato enviado");
    return navigate("/contact");
  };
  return (
    <div>
      <h1>Contato: {id}</h1>

      <button onClick={handleContact}>Enviar mensagem</button>
    </div>
  );
};

export default ContactDatails;
