import axios from "axios";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./CreateItemForm.css";

export default function ProductForm() {
  const [title, setTitle] = useState("");
  const [user, token] = useAuth();
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [condition, setCondition] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [image, setImage] = useState(null);

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
  const [category, setCategory] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("category", category);
    formData.append("zipcode", zipcode);
    formData.append("isActive", isActive);
    formData.append("status", "Available");

    if (image !== null) {
      formData.append("Images", image);
    }
    formData.append("User", user);

    try {
      const response = await axios.post(
        "https://localhost:5001/api/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div className="CreateBox">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            className="TextInput"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            className="TextInput"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            className="TextInput"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div>
          <label>Condition:</label>
          <select value={condition} onChange={handleConditionChange}>
            <option value="">Select a Condition</option>
            {conditions.map((con, index) => (
              <option key={index} value={con}>
                {con}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Category:</label>
          <select value={category} onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Zipcode:</label>
          <input
            type="text"
            className="TextInput"
            value={zipcode}
            onChange={(event) => setZipcode(event.target.value)}
          />
        </div>
        <div>
          <label>Is Active:</label>
          <input
            type="checkbox"
            checked={isActive}
            onChange={(event) => setIsActive(event.target.checked)}
          />
        </div>
        <div>
          <input
            type="file"
            name="Images"
            accept="image/jpeg,image/png,image/gif"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <div>
          <button type="submit">Submit Product!</button>
        </div>
      </form>
    </div>
  );
}
