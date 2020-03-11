import React from "react";
import DishCard from "../../Dish/dishList/DishCard";

// import "./RestCard.scss";

// import Button from "react-bootstrap/Button";

// import { Link } from "react-router-dom";

const FavDish = ({ name, restaurant_id, photo, comments }) => {
  return (
    <tr className="card-rest">
      <h1>{name}</h1>
      <img src={photo} alt="" />
    </tr>
  );
};

export default FavDish;
