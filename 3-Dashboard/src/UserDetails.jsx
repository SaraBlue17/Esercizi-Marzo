import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserDetail() {
  const { id } = useParams(); // Recupera l'ID dell'utente dalla URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Failed to fetch user details", error));
  }, [id]); // Ricarica quando cambia l'ID

  return (
    <div>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Address:</strong> {user.address.street}, {user.address.city}
          </p>
        </>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
}
