import React from "react";

import "./DishCard.scss";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

const DishCard = ({
  name,
  photo,
  _id,
  price,
  restaurant_id,
  score,
  comments
}) => {
  return (
    <div className="card-dish">
      <img src={photo} alt="" />
      <div>
        <h2>{name}</h2>
        <h3>{restaurant_id}</h3>
        <h3>Dirección: {restaurant_id}</h3>
        <hr></hr>
        <Button as="div" variant="dark" size="sm">
          <Link to={`/dishes/${_id}`}>Ver más ></Link>
        </Button>
        <h2>Precio: {price}</h2>
      </div>
      <div>
        <h3>{score}</h3>
        <h3>{comments.length}</h3>
        {<img src="/5stars.svg" alt="" />}
      </div>
    </div>
  );
};

export default DishCard;
