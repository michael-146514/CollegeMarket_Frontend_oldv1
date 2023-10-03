import axios from "axios";
import { useEffect, useState } from "react";

const ItemDetails = ({
  imageNames,
  title,
  price,
  description,
  condition,
  category,
  zipcode,
  status,
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
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Description: {description}</p>
      <p>Condition: {condition}</p>
      <p>Category: {category}</p>
      <p>Zipcode: {zipcode}</p>
      <p>Status: {status}</p>

      {images.map((image, index) => (
        <div key={image.title}>
          <img src={image.imageSrc} alt={image.title} width="250" />
        </div>
      ))}
    </div>
  );
};

export default ItemDetails;
