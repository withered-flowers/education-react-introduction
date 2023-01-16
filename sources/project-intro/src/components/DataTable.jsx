import { useEffect, useState } from "react";

const DataTable = () => {
  // State untuk menampun users
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Nge-fetch data di sini
    fetch("http://localhost:3031/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ga oke nih");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <section>
      <h1>Data Table</h1>

      {!isLoading ? (
        <ul>
          {users.map((user) => {
            // Return HTML (JSX)
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      ) : (
        <h1>Nunggu dulu yah...</h1>
      )}
    </section>
  );
};

export default DataTable;
