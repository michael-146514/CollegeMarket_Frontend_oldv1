import { useState, useEffect } from "react";
import ItemRowsListings from "../../components/ItemRowListings/ItemRowsListings";
import { Link } from "react-router-dom";

const ListingPage = ({}) => {
  return (
    <div>
      <div>
        <Link to={`/listings/create`}>
          <button>Create Listing</button>
        </Link>

        <button> Messages</button>
      </div>
      <hr />
      <div>
        <ItemRowsListings />
      </div>
    </div>
  );
};

export default ListingPage;
