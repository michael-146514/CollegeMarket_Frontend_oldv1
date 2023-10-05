import DisplayCategories from "../DisplayCategories/DisplayCategories";

const Categories = ({}) => {
  const Defaultcategories = [
    "Textbooks",
    "Electronics",
    "Furniture",
    "Clothing",
    "Housing",
    "Sports Equipment",
    "Events and Tickets",
    "Supplies",
    "Jobs and Internships",
    "Events and Parties",
  ];

  return (
    <div>
      {Defaultcategories.map((product) => (
        <DisplayCategories categorie={product} />
      ))}
    </div>
  );
};

export default Categories;
