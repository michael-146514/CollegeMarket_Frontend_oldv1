import react, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const FavoriteForm = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(true);
  const [favorite, setFavorite] = useState([]);
  const [user, token] = useAuth();

  const checkIsFavorite = async () => {
    const response = await axios.get(
      `https://localhost:5001/api/watchlist/${id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(response);
    setFavorite(response.data);

    console.log(isFavorite);
  };

  useEffect(() => {
    checkIsFavorite();
  });

  return <div></div>;
};

export default FavoriteForm;
