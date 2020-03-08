import React from "react";

import "./DishCard.scss";

import Button from "react-bootstrap/Button";

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
    <tr className="card-dish">
      <td><img src={photo} alt="" /></td>
      <td>
        <h2>{name}</h2>
        <h3>{restaurant_id.name}</h3>
        <h3>{restaurant_id.address}</h3>
        <hr></hr>
        <Button as="div" variant="dark" size="sm">
          <Link to={`/dishes/${_id}`}>Ver más ></Link>
        </Button>
        <h2>Precio: {price}</h2>
      </td>
      <td>
        <h3>{score}</h3>
        <h3>{comments.length}</h3>
        {<img src="/5stars.svg" alt="" />}
      </td>
    </tr>
  );
};

export default DishCard;
