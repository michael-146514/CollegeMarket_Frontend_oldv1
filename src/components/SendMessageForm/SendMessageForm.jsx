import axios from "axios";
import useAuth from "../../hooks/useAuth";
import React, { useState } from "react";
import "./SendMessageForm.css";

const SendMessageForm = ({ conversationId }) => {
  const [content, setContent] = useState("");
  const [user, token] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://localhost:5001/api/conversations/${conversationId}/messages`,
        { Content: content, UserId: user.id, ConversationId: conversationId },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      console.log(response.data);

      // Clear the input field after successful submission
      setContent("");
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="SendMessageForm">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={content}
            className="SendInput"
            onChange={(event) => setContent(event.target.value)}
          />

          <button className="SendButton" type="submit">
            <h2>Send</h2>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMessageForm;
