import axios from "axios";
import { useEffect, useState } from "react";
import CreateMessageForm from "../CreateMessageForm/CreateMessageForm";
import "./ItemDetails.css";

const ItemDetails = ({
  imageNames,
  title,
  price,
  description,
  condition,
  category,
  zipcode,
  status,
  sellerId,
}) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const fetchedImages = [];

        for (const imageName of imageNames) {
          const response = await axios.get(
            `https://localhost:5001/api/image/${imageName.url}`
          );
          fetchedImages.push(response.data);
        }

        setImages(fetchedImages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, [imageNames]);

  return (
    <div>
      <div className="ImageDisplay">
        {images.map((image, index) => (
          <div key={image.title}>
            <img src={image.imageSrc} alt={image.title} width="400" />
          </div>
        ))}
      </div>

      <div className="Description">
        <h2 className="Title">{title}</h2>
        <h3 className="ItemText">Price: ${price}</h3>
        <h3 className="ItemText">Description: {description}</h3>
        <h3 className="ItemText">Condition: {condition}</h3>
        <h3 className="ItemText">Category: {category}</h3>
        <h3 className="ItemText">Zipcode: {zipcode}</h3>
        <h3 className="ItemText">Status: {status}</h3>
      </div>

      <div className="MessageForm">
        <CreateMessageForm title={title} sellerId={sellerId} />
      </div>
    </div>
  );
};

export default ItemDetails;
