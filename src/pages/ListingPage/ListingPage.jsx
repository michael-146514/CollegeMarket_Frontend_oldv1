import { useState, useEffect } from "react";
import ItemRowsListings from "../../components/ItemRowListings/ItemRowsListings";

const ListingPage = ({}) => {
  return (
    <div>
      <div>
        <button>Create Listing</button>
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
