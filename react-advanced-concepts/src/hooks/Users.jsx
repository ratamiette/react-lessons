import React, { useState, useEffect } from "react";
import axios from "axios";

function Users(props) {
  const [users, setUsers] = useState([]);

  // the callback function that we pass as first argument to useEffect() can't be decorated with async. We need to encapsulate into a new function
  useEffect(() => {
    async function getUsers() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    }
    getUsers();
  });
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
