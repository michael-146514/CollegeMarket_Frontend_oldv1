import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import "./CreateMessageForm.css";

const CreateMessageForm = ({ SellerId, title }) => {
  const [message, setMessage] = useState("");
  const [user, token] = useAuth();
  const [conversations, setConversations] = useState([]);

  const CreateConversations = async (e) => {
    e.preventDefault();
    const conversationsData = {
      Title: `${title} ${user.userName}`,
      UserTwo: SellerId,
    };

    try {
      const response = await axios.post(
        `https://localhost:5001/api/conversations`,
        conversationsData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setConversations(response.data.id);

      if (response.status === 200 || response.status === 201) {
        window.location.href = `/conversations/message/${response.data.id}`;
      } else {
        console.log("Failed to create conversation");
      }
    } catch (error) {
      console.log("Error in CreateConversation " + error);
    }
  };

  return (
    <div>
      <div>
        <h3 className="MessageFormTitle">Contact Seller</h3>
      </div>
      {user ? (
        <>
          <div>
            <form>
              <div>
                <button
                  onClick={CreateConversations}
                  type="button"
                  class="MessageFormButton"
                >
                  Message Seller
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <Link to={`/login`}>
          <button type="button" class="MessageFormButton">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default CreateMessageForm;
