const MessageDisplayForm = ({ username, content }) => {
  return (
    <div>
      <div>
        <h3>{username}</h3>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default MessageDisplayForm;
