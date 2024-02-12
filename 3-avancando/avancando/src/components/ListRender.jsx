import { useState } from "react";

const ListRender = () => {
  const [users, setUsers] = useState([
    { id: 0, name: "vitor" },
    { id: 1, name: "romario" },
    { id: 2, name: "rafael" },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    setUsers((prevUsers) => {
      const userToDelete = prevUsers.filter((user) => user.id !== randomNumber);

      return userToDelete;
    });
  };

  return (
    <div>
      <h1>Renderizando listas</h1>
      <ul>
        {users.map((item) => (
          // Precisa settar uma key para itens iterados
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Random User</button>
    </div>
  );
};

export default ListRender;
