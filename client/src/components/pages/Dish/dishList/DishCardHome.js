import React from "react";

import "./DishCardHome.scss";

import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const DishCard = ({
  name,
  photo,
  _id,
  sumScore,
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
        {sumScore >= 4.8 && <img src="/5stars.svg" alt="" />}
        {sumScore < 4.8 && sumScore >= 4.3 && <img src="/4Hstars.svg" alt="" />}
        {sumScore < 4.3 && sumScore >= 3.8 && <img src="/4stars.svg" alt="" />}
        {sumScore < 3.8 && sumScore >= 3.3 && <img src="/3Hstars.svg" alt="" />}
        {sumScore < 3.3 && sumScore >= 3.8 && <img src="/3stars.svg" alt="" />}
        {sumScore < 2.8 && sumScore >= 2.3 && <img src="/2Hstars.svg" alt="" />}
        {sumScore < 2.3 && sumScore >= 1.8 && <img src="/2stars.svg" alt="" />}
        {sumScore < 1.8 && sumScore >= 1.3 && <img src="/1Hstars.svg" alt="" />}
        {sumScore < 1.8 && <img src="/1stars.svg" alt="" />}
        <h3>Valoraciones: {comments.length + 1} </h3>
      </div>
      <Button as="div" className="b-Best" variant="dark" size="sm">
        <Link to={`/dishes/${_id}`}>Ver más ></Link>
      </Button>
    </div>
  );
};

export default DishCard;
