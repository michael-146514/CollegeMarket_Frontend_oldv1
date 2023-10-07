const AdminDisplayUser = ({ Username, Firstname, LastName, id, email }) => {
  return (
    <div>
      <div>
        <h3>Username: {Username}</h3>
        <h3>
          Name: {Firstname} {LastName}
        </h3>
        <h3>User Id: {id}</h3>
        <h3>Email: {email}</h3>
      </div>
    </div>
  );
};

export default AdminDisplayUser;
