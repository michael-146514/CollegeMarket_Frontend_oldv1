import React from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const SearchedPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const zipcode = searchParams.get("zipcode");

  const LookForProducts = async () => {
    try {
    } catch (error) {
      console.warn("Error in FetchUserProducts request: ", error);
    }
  };

  return (
    <div>
      <h1>Search Results</h1>
      <p>Query: {query}</p>
      <p>Zipcode: {zipcode}</p>
      {/* Add your search results display logic here */}
    </div>
  );
};

export default SearchedPage;
