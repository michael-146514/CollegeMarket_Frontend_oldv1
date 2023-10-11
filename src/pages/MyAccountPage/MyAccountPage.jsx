import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const MyAccountPage = ({}) => {
  const [user, token] = useAuth();
  console.log(user);
  return (
    <div>
      <div className="CreateBox">
        <h1>Hello: {user.userName}</h1>
      </div>
      <div className="CreateBox">
        <button>Seller Page</button>
        <button>Messages</button>
        <button>Watch List</button>
        <button>Account Settings</button>
      </div>
      <div>
        <h3>Puchases</h3>
      </div>
      <div>
        <h3>Watch List</h3>
      </div>
      <div>
        <h3>Active Listings</h3>
      </div>
    </div>
  );
};

export default MyAccountPage;
