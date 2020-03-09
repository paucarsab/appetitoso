import React from "react";

import "./DishCardHome.scss";

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
    <div className="card-dishHome">
      <img src={photo} alt="" className="photo" />
      <div>
        <h2>{name}</h2>
      </div>
      <div className="scoreBest">
        <img src="/5stars.svg" alt="" />
        <h3>{comments.length} Opiniones</h3>
      </div>
      <Button as="div"  className="b-Best" variant="dark" size="sm">
        <Link to={`/dishes/${_id}`}>Ver más ></Link>
      </Button>
    </div>
  );
};

export default DishCard;
