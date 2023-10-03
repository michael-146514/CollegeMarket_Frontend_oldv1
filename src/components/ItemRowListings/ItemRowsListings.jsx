import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const ItemRowsListings = ({}) => {
  const [user, token] = useAuth();
  const [Listings, SetListings] = useState();

  const fetchUserProducts = async () => {
    try {
      const response = await axios.get(
        `https://localhost:5001/api/products/user/${user.id}`
      );

      SetListings(response.data);
      console.log(Listings);
    } catch (error) {
      console.warn("Error in FetchUserProducts request: ", error);
    }
  };

  return (
    <div>
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=360"
        alt=""
      />
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=360"
        alt=""
      />
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=360"
        alt=""
      />
    </div>
  );
};

export default ItemRowsListings;
