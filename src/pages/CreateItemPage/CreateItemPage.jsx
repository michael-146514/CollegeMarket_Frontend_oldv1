import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useState, useEffect } from "react";
import ImageForm from "../../components/ImageForm/ImageForm";
import ImageList from "../../components/ImageListTest/ImageList";

const CreateItemPage = ({}) => {
  return (
    <div>
      <ImageForm />
    </div>
  );
};

export default CreateItemPage;
