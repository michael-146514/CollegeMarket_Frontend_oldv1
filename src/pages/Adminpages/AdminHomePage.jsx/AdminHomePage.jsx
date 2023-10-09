import { Link } from "react-router-dom";
import "./AdminHomePage.css";

const AdminHomePage = ({}) => {
  return (
    <div className="AdminButtons">
      <Link to={`/admin/search/user`}>
        <button className="ButtonItself">Search Users</button>
      </Link>
      <Link to={`/admin/search/listing`}>
        <button className="ButtonItself">Search Listing</button>
      </Link>
    </div>
  );
};

export default AdminHomePage;
