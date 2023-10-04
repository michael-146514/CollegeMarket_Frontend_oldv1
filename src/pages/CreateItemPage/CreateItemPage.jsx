import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useState, useEffect } from "react";
import CreateItemForm from "../../components/CreateItemForm/CreateItemForm";
import ImageList from "../../components/ImageListTest/ImageList";

const CreateItemPage = ({}) => {
  return (
    <div>
      <CreateItemForm />
    </div>
  );
};

export default CreateItemPage;
