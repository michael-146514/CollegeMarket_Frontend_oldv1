import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import "./ItemRowListings.css";

const ItemRowsListings = ({}) => {
  const [user, token] = useAuth();
  const [Listings, SetListings] = useState([]);
  const [images, setImages] = useState([]);

  const fetchUserProducts = async () => {
    try {
      const response = await axios.get(
        `https://localhost:5001/api/products/user/${user.id}`
      );

      SetListings(response.data);
    } catch (error) {
      console.warn("Error in FetchUserProducts request: ", error);
    }
  };

  const fetchImages = async () => {
    try {
      const fetchedImages = [];

      for (const imageName of Listings.imageUrls.url) {
        const response = await axios.get(
          `https://localhost:5001/api/image/${imageName.url}`
        );
        fetchedImages.push(response.data);
      }

      setImages(fetchedImages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserProducts();
  }, []);

  return (
    <div>
      <h2>Your Listings</h2>
      <ul className="SearchItemrow">
        {Listings.map((listing) => (
          <li key={listing.id}>
            <Link to={`/listings/edit/${listing.id}`}>
              <div className="ListingItem">
                {listing.imageUrls.length > 0 && (
                  <img
                    src={`https://localhost:5001/images/${listing.imageUrls[0].url}`}
                    alt={listing.title}
                    width="200"
                    height="200"
                  />
                )}
                <div>
                  <h4>{listing.title}</h4>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemRowsListings;
