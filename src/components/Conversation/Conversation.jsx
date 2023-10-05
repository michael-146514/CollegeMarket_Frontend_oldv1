import { Link } from "react-router-dom";

const Conversations = ({ title, id }) => {
  return (
    <div>
      <Link to={`/conversations/message/${id}`}>
        <h4>{title}</h4>
      </Link>
    </div>
  );
};

export default Conversations;
