import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SellerPage = ({}) => {
  const [user, token] = useAuth();
  return (
    <div>
      <h3>Hello {user.userName}</h3>
    </div>
  );
};

export default SellerPage;
