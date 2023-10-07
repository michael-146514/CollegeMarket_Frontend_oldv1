import { Link } from "react-router-dom";

const AdminHomePage = ({}) => {
  return (
    <div>
      <Link to={`/admin/search/user`}>
        <button>Search Users</button>
      </Link>
      <Link to={`/admin/search/listing`}>
        <button>Search Listing</button>
      </Link>
    </div>
  );
};

export default AdminHomePage;
