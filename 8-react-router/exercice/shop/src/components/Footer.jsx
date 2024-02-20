// import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="contacts">
        <h3>Fale conosco</h3>
        <ul>
          <li>
            <a
              href="https://wa.me/5516997620585"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5516997620585"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
      <div className="contacts">
        <h3>Mídias</h3>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/vitor-silva-342075231/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://www.linkedin.com/in/vitor-silva-342075231/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
