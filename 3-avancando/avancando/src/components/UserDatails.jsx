// import React from "react";

const UserDatails = () => {
  const users = [
    { id: 0, nome: "John", idade: 3, profissao: "Bebê" },
    { id: 1, nome: "Maria", idade: 31, profissao: "Desenvolvedora" },
    { id: 2, nome: "Gabriel", idade: 19, profissao: "Uber" },
  ];

  return (
    <div>
      <h1>Usuários</h1>
      {users.map(({ id, nome, idade, profissao }) => (
        <div key={id}>
          <h4>{nome}</h4>
          <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissao: {profissao}</li>
            {idade >= 18 && (
              <p>Este usuário por tirar carteira de motorista!</p>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserDatails;
