import React from "react";
import { Link } from "react-router-dom";

const MyWatchListDisplay = ({ ImageUrl, Title, Status, Price, Id }) => {
  return (
    <div>
      <Link to={`/item/${Id}`}>
        <div>
          <img src={ImageUrl} alt={Title} />
        </div>
        <div>
          <h4>status: {Status}</h4>
        </div>
        <div>
          <h4>Title: {Title}</h4>
          <h4>Price: {Price}</h4>
        </div>
      </Link>
    </div>
  );
};

export default MyWatchListDisplay;
