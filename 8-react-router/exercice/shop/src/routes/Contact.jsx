// import React from "react";
import { Link } from "react-router-dom";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contacts-container">
        <div className="contacts-div">
          <h3>Contatos</h3>
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
      </div>
      <div className="buttons-nav">
        <Link to={"/"}>Voltar</Link>
      </div>
    </>
  );
};

export default Contact;
