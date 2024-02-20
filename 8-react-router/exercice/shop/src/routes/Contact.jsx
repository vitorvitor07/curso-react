// import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h3>Contatos</h3>
      <div>
        <ul>
          <li>
            <a href="https://wa.me/5516997620585">WhatsApp</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/vitor-silva-342075231/">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
      <div>
        <Link to={"/"}>Voltar</Link>
      </div>
    </div>
  );
};

export default Contact;
