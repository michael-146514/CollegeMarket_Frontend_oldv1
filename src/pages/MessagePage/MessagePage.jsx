import { useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import React, { useState, useEffect } from "react";
import MessageDisplayForm from "../../components/MessageDisplayForm/MessageDisplayForm";
import SendMessageForm from "../../components/SendMessageForm/SendMessageForm";
import "./MessagePage.css";

const MessagePage = ({}) => {
  const { id } = useParams();
  const [user, token] = useAuth();
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `https://localhost:5001/api/conversations/${id}/messages`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      setMessages(response.data);
    } catch (error) {
      console.warn("Error in FetchMessages " + error);
    }
  };

  useEffect(() => {
    fetchMessages();
  });

  return (
    <div>
      <div className="MessageForm">
        <ul className="Messages">
          {messages.map((messages) => (
            <li key={messages.id}>
              <MessageDisplayForm
                username={messages.username}
                content={messages.content}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <SendMessageForm conversationId={id} />
      </div>
    </div>
  );
};

export default MessagePage;
