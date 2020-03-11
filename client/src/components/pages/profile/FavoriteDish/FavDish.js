import React from "react";
import DishCard from "../../Dish/dishList/DishCard";

// import "./RestCard.scss";

// import Button from "react-bootstrap/Button";

// import { Link } from "react-router-dom";

const FavDish = ({ name, restaurant_id, photo, comments }) => {
  return (
    <div className="dishCommentData">
      <img src={photo} alt="{name}" />
      <h3>{name}</h3>
      <h3>{restaurant_id}</h3>
    </div>
  );
};

export default FavDish;
