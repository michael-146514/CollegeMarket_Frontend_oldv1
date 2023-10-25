import { Link } from "react-router-dom";
import "./Conversation.css";

const Conversations = ({ title, id }) => {
  return (
    <div className="ConversationSmallBox">
      <Link to={`/Myaccount/conversations/message/${id}`}>
        <h4>{title}</h4>
      </Link>
    </div>
  );
};

export default Conversations;
