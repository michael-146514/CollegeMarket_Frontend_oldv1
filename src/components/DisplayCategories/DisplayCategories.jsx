import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DisplayCategories.css";

const DisplayCategories = ({ categorie }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `https://localhost:5001/api/search/category/${categorie}`
      );

      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.warn(`Error in FetchProducts for ${categorie}: `, error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bigBox">
      <h3 className="categorieName">{categorie}:</h3>

      <div>
        {products.length < 1 ? (
          <div className="ListingItem">
            <h3>No Search Result!</h3>
          </div>
        ) : (
          <ul className="itemrow">
            {products.slice(0, 6).map((product) => (
              <div className="item">
                <li key={product.id}>
                  <Link to={`/item/${product.id}`} className="productText">
                    <img
                      src={`https://localhost:5001/images/${product.imageUrls[0].url}`}
                      alt={product.title}
                      width="200"
                      height="200"
                    />
                    <h3>
                      {product.title} | ${product.price}
                    </h3>
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DisplayCategories;
