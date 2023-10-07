import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import AdminUserListing from "../../../components/AdminUserListing/AdminUserListing";

const AdminManageUser = () => {
  const { id } = useParams();

  const [userData, setUserData] = useState(null);
  const [user, token] = useAuth();

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `https://localhost:5001/api/admin/user/${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);
      // Update the state with the fetched user data
      setUserData(response.data);
    } catch (error) {
      console.warn("Error in fetchUser " + error);
    }
  };

  const handleDisableUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://localhost:5001/api/admin/disable/user/${id}`,
        null, // No request body needed for this request
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);

      // Update the user data after disabling the user
      fetchUser();
    } catch (error) {
      console.warn("Error in handleDisableUser " + error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]); // Fetch user data whenever the 'id' changes

  return (
    <div>
      {userData ? (
        <div>
          <ul>
            {userData.map((user) => (
              <li key={user.id}>
                <li>UserName: {user.userName}</li>
                <li>First Name: {user.firstName}</li>
                <li>Last Name: {user.lastName}</li>
                <li>Email: {user.email}</li>
                <li>User Id: {user.id}</li>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}

      <div>
        <form onSubmit={handleDisableUser}>
          <button type="submit">
            <h3>Suspend User</h3>
          </button>
        </form>
      </div>
      <div>
        <ul>
          {userData.map((user) => (
            <li key={user.id}>
              <AdminUserListing username={user.userName} id={user.id} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminManageUser;
