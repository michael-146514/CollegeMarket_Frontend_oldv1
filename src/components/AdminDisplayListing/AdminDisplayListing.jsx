import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminDisplayListing = ({ ProductId, ImageUrl, Title, Price }) => {
  return (
    <div className="ListingItem">
      <div>
        <Link to={`/admin/search/listing/${ProductId}`}>
          <img
            src={`https://localhost:5001/images/${ImageUrl[0].url}`}
            alt={Title}
            width="200"
            height="200"
          />
          <h3>
            {Title} | ${Price}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default AdminDisplayListing;
