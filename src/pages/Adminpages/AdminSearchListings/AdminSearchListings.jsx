import axios from "axios";
import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import AdminDisplayListing from "../../../components/AdminDisplayListing/AdminDisplayListing";

const AdminSearchListing = () => {
  const [user, token] = useAuth();
  const [context, setContext] = useState("");
  const [listings, setListings] = useState([]); // Create a state for storing the fetched users

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `https://localhost:5001/api/admin/listings?query=${context}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      // Update the state with the fetched users
      setListings(response.data);
    } catch (error) {
      console.warn("Error in fetchUsers " + error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [context]);

  return (
    <div>
      <div>
        <form>
          <h2>Search Listing</h2>
          <input
            type="text"
            value={context}
            onChange={(event) => setContext(event.target.value)}
          />
        </form>
      </div>
      <div>
        <h3>Listings:</h3>
        <div>
          <div>
            {listings.length < 1 ? (
              <h3>No Search Result!</h3>
            ) : (
              <ul>
                {listings.map((product) => (
                  <AdminDisplayListing
                    key={product.id}
                    ProductId={product.id}
                    ImageUrl={product.imageUrls}
                    Title={product.title}
                    Price={product.price}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSearchListing;
