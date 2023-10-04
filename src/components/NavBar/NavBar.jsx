import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import { useState } from "react";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [zipcode, setZipcode] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "" && zipcode.trim() !== "") {
      // Use the `to` prop of the `Link` component to navigate with route parameters
      navigate(`/search?query=${encodeURIComponent(query)}&zipcode=${zipcode}`);
    }
  };

  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>College Market</b>
          </Link>
        </li>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for items"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
