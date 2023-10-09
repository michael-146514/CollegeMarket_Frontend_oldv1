import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminDisplayUser from "../../../components/AdminDisplayUsers/AdminDisplayUsers";
import useAuth from "../../../hooks/useAuth";
import ItemDetails from "../../../components/ItemDetails/ItemDetails";
import { Link } from "react-router-dom";

const AdminManageListing = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [user, token] = useAuth();

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
        imageUrls: productdetails.imageUrls || [],
        condition: productdetails.condition || "???",
        category: productdetails.category || "???",
        status: productdetails.status || "???",
        Sellerid:
          productdetails.userId || "No User, Cant be sold! Please Report!",
        zipcode: productdetails.zipcode || 0,
      };

      setItem(productInfo);
    } catch (error) {
      console.warn("Error in FetchItem request: ", error);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `https://localhost:5001/api/admin/user/${item.Sellerid}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      // Update the state with the fetched user data
      setUserData(response.data);
    } catch (error) {
      console.warn("Error in fetchUser " + error);
    }
  };

  const handleDisableListing = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://localhost:5001/api/admin/product/disable/${id}`,
        null, // No request body needed for this request
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);

      // Update the user data after disabling the user
    } catch (error) {
      console.warn("Error in handleDisableUser " + error);
    }
  };

  useEffect(() => {
    fetchItem();
  }, [id]); // Fetch item data when 'id' changes

  useEffect(() => {
    if (item.Sellerid) {
      fetchUser();
    }
  }, [item.Sellerid, token]); // Fetch user data when 'item.Sellerid' or 'token' changes

  return (
    <div>
      <div className="CreateBox">
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
      <div>
        {userData ? (
          <div>
            <ul className="CreateBox">
              {userData.map((user) => (
                <li key={user.id}>
                  <li>UserName: {user.userName}</li>
                  <li>First Name: {user.firstName}</li>
                  <li>Last Name: {user.lastName}</li>
                  <li>Email: {user.email}</li>
                  <li>User Id: {user.id}</li>
                  <Link to={`/admin/search/user/${user.id}`}>
                    <button>Manage</button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
      <div className="CreateBox">
        <form onSubmit={handleDisableListing}>
          <button type="submit">
            <h3>Suspend Listing</h3>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminManageListing;
