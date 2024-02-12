import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ user }) => {
  // Gerenciamento de Dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, bio, role });
    setEmail("");
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome aqui"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* Label envolvendo o input */}
        {/* Sugerido na documentação do React */}
        <label>
          <span>Email: </span>
          <input
            value={email}
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu e-mail aqui"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Bio: </span>

          <textarea
            name="bio"
            id="bio"
            cols="30"
            rows="10"
            value={bio}
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </label>
        <label>
          <span>Função: </span>
          <select
            name="role"
            id="role"
            onChange={({ target: { value } }) => setRole(value)}
          >
            <option value=""></option>
            <option value="user">Administrador</option>
            <option value="user">Editor</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
