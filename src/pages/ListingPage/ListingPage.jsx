import { useState, useEffect } from "react";
import ItemRowsListings from "../../components/ItemRowListings/ItemRowsListings";
import { Link } from "react-router-dom";
import "./ListingPage.css";

const ListingPage = ({}) => {
  return (
    <div>
      <div className="CreateBox">
        <Link to={`/listings/create`}>
          <button className="ButtonsListings">Create Listing</button>
        </Link>
        <Link to={`/conversations`}>
          <button className="ButtonsListings"> Messages</button>
        </Link>
      </div>
      <hr />
      <div className="listingBox">
        <ItemRowsListings />
      </div>
    </div>
  );
};

export default ListingPage;
