import { useEffect, useState } from "react";

import type { User } from "@repo/shared";

import {
  capitalize
} from "@repo/utils";

import Header from "./components/Header";

const API_URL = "http://localhost:5000";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/users`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((result) => {
        setUsers(result.data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <Header />

      <h1>Welcome to the Monorepo</h1>

      <p>
        Utility example: {capitalize("hello world")}
      </p>

      <h2>Users</h2>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;