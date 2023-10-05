import axios from "axios";
import useAuth from "../../hooks/useAuth";
import React, { useState, useEffect } from "react";
import Conversations from "../../components/Conversation/Conversation";

const ConversationsPage = ({}) => {
  const [conversations, setConversations] = useState([]);
  const [user, token] = useAuth();

  const fetchConversations = async () => {
    try {
      const response = await axios.get(
        "https://localhost:5001/api/conversations",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      setConversations(response.data);
    } catch (error) {
      console.warn("Error in FetchConversations " + error);
    }
  };

  useEffect(() => {
    fetchConversations();
  });

  return (
    <div>
      <h2>Your Conversations</h2>
      <ul>
        {conversations.map((conversations) => (
          <li key={conversations.id}>
            <Conversations title={conversations.title} id={conversations.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationsPage;
