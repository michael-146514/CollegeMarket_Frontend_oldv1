import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminUserListing = ({ id, username }) => {
  const [Listings, SetListings] = useState([]);
  const [images, setImages] = useState([]);

  const fetchUserProducts = async () => {
    try {
      const response = await axios.get(
        `https://localhost:5001/api/products/user/${id}`
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
      <h3>{username}'s Listings</h3>
      <ul>
        {Listings.map((listing) => (
          <li key={listing.id} className="ListingItem">
            <Link to={`/admin/search/listing/${listing.id}`}>
              {listing.imageUrls.length > 0 && (
                <img
                  src={`https://localhost:5001/images/${listing.imageUrls[0].url}`}
                  alt={listing.title}
                  width="100"
                  height="100"
                />
              )}
              <div>{listing.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminUserListing;
