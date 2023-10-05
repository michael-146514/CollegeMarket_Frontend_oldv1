import { useParams } from "react-router-dom";

const MessagePage = ({}) => {
  const { id } = useParams();
  return (
    <div>
      <h2>Hello world</h2>
    </div>
  );
};

export default MessagePage;
