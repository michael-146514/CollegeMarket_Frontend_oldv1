import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import SearchProduct from "../../components/SearchProduct/SearchProduct";

const SearchedPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const zipcode = searchParams.get("zipcode");

  const [products, setProducts] = useState([]);

  const LookForProducts = async () => {
    try {
      const response = await axios.get(
        `https://localhost:5001/api/search?query=${query}&zipcode=${zipcode}`
      );

      setProducts(response.data);
    } catch (error) {
      console.warn("Error in FetchUserProducts request: ", error);
      setProducts([]);
    }
  };

  useEffect(() => {
    LookForProducts();
    console.log(products);
  }, [query, zipcode]);

  return (
    <div>
      <h1>Search Results:</h1>
      <div>
        {products.length < 1 ? (
          <h3>No Search Result!</h3>
        ) : (
          <ul>
            {products.map((product) => (
              <SearchProduct
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
  );
};

export default SearchedPage;
