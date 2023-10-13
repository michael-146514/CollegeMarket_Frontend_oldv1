// General Imports
import { Routes, Route } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ListingPage from "./pages/ListingPage/ListingPage";
import CreateItemPage from "./pages/CreateItemPage/CreateItemPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import EditItemPage from "./pages/EditItemPage/EditItemPage";
import SearchedPage from "./pages/SearchPage/SearchPage";
import ConversationsPage from "./pages/ConversationsPage/ConversationsPage";
import MessagePage from "./pages/MessagePage/MessagePage";
import MyAccountPage from "./pages/MyAccountPage/MyAccountPage";
import WatchListPage from "./pages/WatchListPage/WatchListPage";

//Admin Pages imports
import AdminHomePage from "./pages/Adminpages/AdminHomePage.jsx/AdminHomePage";
import AdminSearchUser from "./pages/Adminpages/AdminSearchUser/AdminSearchUser";
import AdminManageUser from "./pages/Adminpages/AdminManageUser/AdminManageUser";
import AdminManageListing from "./pages/Adminpages/AdminManageListing/AdminManageListing";
import AdminSearchListing from "./pages/Adminpages/AdminSearchListings/AdminSearchListings";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [user, token] = useAuth();

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchedPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/listings" element={<ListingPage />} />
        <Route
          path="/MyAccount"
          element={
            <PrivateRoute>
              <MyAccountPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/MyAccount/watchlist"
          element={
            <PrivateRoute>
              <WatchListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/listings/create"
          element={
            <PrivateRoute>
              <CreateItemPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/listings/edit/:id"
          element={
            <PrivateRoute>
              <EditItemPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/conversations"
          element={
            <PrivateRoute>
              <ConversationsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/conversations/message/:id"
          element={
            <PrivateRoute>
              <MessagePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminHomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/search/user"
          element={
            <PrivateRoute>
              <AdminSearchUser />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/search/listing"
          element={
            <PrivateRoute>
              <AdminSearchListing />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/search/user/:id"
          element={
            <PrivateRoute>
              <AdminManageUser />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/search/listing/:id"
          element={
            <PrivateRoute>
              <AdminManageListing />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
