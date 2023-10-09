import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./EditItemPage.css";

const EditItemPage = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [user, token] = useAuth();
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [condition, setCondition] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("");

  const categories = [
    "Textbooks",
    "Electronics",
    "Furniture",
    "Clothing",
    "Housing",
    "Sports Equipment",
    "Events and Tickets",
    "Supplies",
    "Jobs and Internships",
    "Events and Parties",
  ];

  const conditions = [
    "Brand New",
    "Used but good",
    "Okay",
    "Not the best",
    "Bad",
  ];

  const FetchDetails = async () => {
    try {
      const response = await axios.get(
        `https://localhost:5001/api/products/${id}`
      );

      const data = response.data;
      setTitle(data.title);
      setDescription(data.description);
      setPrice(data.price);
      setCondition(data.condition);
      setZipcode(data.zipcode);
      setIsActive(data.isActive);
      setCategory(data.category);

      try {
        const fetchedImages = [];

        for (const imageNames of data.imageUrls) {
          const response = await axios.get(
            `https://localhost:5001/api/image/${imageNames.url}`
          );
          fetchedImages.push(response.data);
        }

        setImages(fetchedImages);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.log("Error in Fetch Details " + error);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleResubmit = async (e) => {
    e.preventDefault();
    const requestData = {
      title: title,
      price: price,
      description: description,
      category: category,
      Status: "Available",
      isActive: true,
      condition: condition,
    };
    //formData.append("condition", condition);
    //formData.append("zipcode", zipcode);
    try {
      const response = await axios.put(
        `https://localhost:5001/api/products/${id}`,
        requestData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log("Error in handleResubmit " + error);
    }
  };

  const handleSoldDeactive = async (e) => {
    e.preventDefault();
    const requestData = {
      title: title,
      price: price,
      description: description,
      category: category,
      Status: "Sold",
      isActive: false,
      condition: condition,
    };

    try {
      const response = await axios.put(
        `https://localhost:5001/api/products/${id}`,
        requestData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log("Error in handleResubmit " + error);
    }
  };

  useEffect(() => {
    FetchDetails();
  }, []);

  return (
    <div className="CreateBox">
      <div>
        {images.map((image, index) => (
          <div key={image.title}>
            <img src={image.imageSrc} alt={image.title} width="250" />
          </div>
        ))}
      </div>
      <div>
        <form onSubmit={handleResubmit}>
          <div>
            <h3>Title</h3>
            <input
              type="text"
              value={title}
              className="TextInput"
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div>
            <h3>Price</h3>
            <input
              type="text"
              className="TextInput"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <div>
            <h3>Description</h3>
            <input
              type="text"
              className="TextInput"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div>
            <h3>Category:</h3>
            <select value={category} onChange={handleCategoryChange}>
              <option value={categories}>Select a category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <label>Condition:</label>
          <select value={condition} onChange={handleConditionChange}>
            <option value={conditions}>Select a Condition</option>
            {conditions.map((con, index) => (
              <option key={index} value={con}>
                {con}
              </option>
            ))}
          </select>
          <div>
            <button type="submit">ReSubmit</button>
          </div>
        </form>
        <div>
          <form onSubmit={handleSoldDeactive}>
            <button type="submit">Sold Listing</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditItemPage;
