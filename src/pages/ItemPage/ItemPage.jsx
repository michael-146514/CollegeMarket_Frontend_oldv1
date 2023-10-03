import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import ItemDetails from "../../components/ItemDetails/ItemDetails";

const ItemPage = ({}) => {
  const { id } = useParams();

  const [item, setItem] = useState({
    title: "",
    price: 0,
    description: "",
    imageUrls: [],
    condition: "",
    category: "",
    status: "",
    Sellerid: "",
    zipcode: 0,
  });

  const fetchItem = async () => {
    try {
      const response = await axios.get(
        `https://localhost:5001/api/products/${id}`
      );

      const productdetails = response.data;
      const productInfo = {
        title: productdetails.title || "No Title Available",
        price: productdetails.price || 0,
        description: productdetails.description || "No description",
        imageUrls: productdetails.imageUrls || [], // Ensure it's an array
        condition: productdetails.condition || "???",
        category: productdetails.category || "???",
        status: productdetails.status || "???",
        Sellerid:
          productdetails.userId || "No User, Cant be sold! Please Report!",
        zipcode: productdetails.zipcode || 0,
      };

      setItem(productInfo);
      console.log(productInfo);
      console.log(item.imageUrls);
    } catch (error) {
      console.warn("Error in FetchItem request: ", error);
    }
  };

  useEffect(
    () => {
      fetchItem();
    },
    [id],
    [item.imageUrls]
  );

  console.log(item.imageUrls);

  return (
    <div>
      <div>
        <ItemDetails
          imageNames={item.imageUrls}
          title={item.title}
          price={item.price}
          description={item.description}
          condition={item.condition}
          category={item.category}
          zipcode={item.zipcode}
          status={item.status}
        />
      </div>
    </div>
  );
};

export default ItemPage;
