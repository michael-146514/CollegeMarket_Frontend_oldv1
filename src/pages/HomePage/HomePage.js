import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

import Categories from "../../components/Categories/Categories";

const HomePage = () => {
  // The "user" value from this Hook contains user information (id, userName, email) from the decoded token
  // The "token" value is the JWT token sent from the backend that you will send back in the header of any request requiring authentication
  const [user, token] = useAuth();

  useEffect(() => {}, [token]);

  return (
    <div>
      <Categories />
    </div>
  );
};

export default HomePage;
