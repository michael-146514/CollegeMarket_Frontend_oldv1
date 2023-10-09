import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [zipcode, setZipcode] = useState("53040");

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
        <form onSubmit={handleSearch} className="searchBar">
          <input
            type="text"
            className="SearchItems"
            placeholder="Search for items"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input
            type="text"
            className="SearchZipcode"
            placeholder="Zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
          <button type="submit" className="Submit">
            <AiOutlineSend size={25} />
          </button>
        </form>
        <li className="user">
          <div class="dropdown">
            <button class="dropbtn">
              <FaUserCircle size={35} />

              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              {user ? (
                <>
                  <a href="/listings">Your Listings</a>
                  <a href="/conversations">Messages</a>
                  <a onClick={logoutUser}>Logout</a>
                </>
              ) : (
                <a onClick={() => navigate("/login")}>Login</a>
              )}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
