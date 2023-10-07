import axios from "axios";
import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import AdminDisplayUser from "../../../components/AdminDisplayUsers/AdminDisplayUsers";

const AdminSearchUser = () => {
  const [user, token] = useAuth();
  const [context, setContext] = useState("");
  const [users, setUsers] = useState([]); // Create a state for storing the fetched users

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `https://localhost:5001/api/admin/user?query=${context}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      // Update the state with the fetched users
      setUsers(response.data);
    } catch (error) {
      console.warn("Error in fetchUsers " + error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [context]); // Add context as a dependency to useEffect

  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            value={context}
            onChange={(event) => setContext(event.target.value)}
          />
        </form>
      </div>
      <div>
        <h3>Users:</h3>
        <div>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <AdminDisplayUser
                  Username={user.userName}
                  Firstname={user.firstName}
                  Lastname={user.lastName}
                  email={user.email}
                  id={user.id}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminSearchUser;
