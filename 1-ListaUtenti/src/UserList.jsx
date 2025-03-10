import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Failed to fetch data", error);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchUser(e.target.value); // Gestisce il cambiamento nel campo di ricerca
  };

  const searchUserList = (term) => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(term.toLowerCase())
    );
  }; // Serve per filtrare gli utenti in base al contenuto della ricerca

  const filteredUsers = searchUserList(searchUser);

  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        value={searchUser} // Imposta il valore dell'input uguale al valore di searchUser nello stato.
        onChange={handleSearchChange}
      ></input>

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> {user.id} <br />
            {user.email} <br />
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
} // Previene il refresh della pagina
