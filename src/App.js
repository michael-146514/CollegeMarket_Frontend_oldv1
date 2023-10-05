// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ListingPage from "./pages/ListingPage/ListingPage";
import CreateItemPage from "./pages/CreateItemPage/CreateItemPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import SearchedPage from "./pages/SearchPage/SearchPage";
import ConversationsPage from "./pages/ConversationsPage/ConversationsPage";
import MessagePage from "./pages/MessagePage/MessagePage";
// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchedPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/listings" element={<ListingPage />} />
        <Route
          path="/listings/create"
          element={
            <PrivateRoute>
              <CreateItemPage />
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
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
