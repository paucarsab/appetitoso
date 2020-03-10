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
        {score >= 4.8 && <img src="/5stars.svg" alt="" />}
        {score < 4.8 && score >= 4.3 && <img src="/4Hstars.svg" alt="" />}
        {score < 4.3 && score >= 3.8 && <img src="/4stars.svg" alt="" />}
        {score < 3.8 && score >= 3.3 && <img src="/3Hstars.svg" alt="" />}
        {score < 3.3 && score >= 3.8 && <img src="/3stars.svg" alt="" />}
        {score < 2.8 && score >= 2.3 && <img src="/2Hstars.svg" alt="" />}
        {score < 2.3 && score >= 1.8 && <img src="/2stars.svg" alt="" />}
        {score < 1.8 && score >= 1.3 && <img src="/1Hstars.svg" alt="" />}
        {score < 1.8 && <img src="/1stars.svg" alt="" />}
        <h3>{comments.length} Opiniones</h3>
      </div>
      <Button as="div" className="b-Best" variant="dark" size="sm">
        <Link to={`/dishes/${_id}`}>Ver más ></Link>
      </Button>
    </div>
  );
};

export default DishCard;
