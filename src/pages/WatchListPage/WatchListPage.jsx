import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import MyWatchListDisplay from "../../components/MyWatchListDisplay/MyWatchListDisplay";

const WatchListPage = ({}) => {
  const [watchListData, SetWatchListData] = useState();
  const [user, token] = useAuth();

  const fetchWatchListData = async () => {
    try {
      const response = await axios.get();

      SetWatchListData(response.data);
    } catch (error) {
      console.warn("Error in FetchWatchListData " + error);
    }
  };

  return (
    <div>
      <div>
        <h3>My WatchList!</h3>
      </div>
      <div>
        {watchListData.length < 1 ? (
          <div className="ListingItem">
            <h3>None Found!</h3>
          </div>
        ) : (
          <MyWatchListDisplay />
        )}
      </div>
    </div>
  );
};

export default WatchListPage;
