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
  let sum = score.reduce((previous, current) => current += previous);
  let avg = sum / score.length;
  return (
    <div className="card-dishHome">
      <img src={photo} alt="" className="photo" />
      <div>
        <h2>{name}</h2>
      </div>
      <div className="scoreBest">
        {avg >= 4.8 && <img src="/5stars.svg" alt="" />}
        {avg < 4.8 && avg >= 4.3 && <img src="/4Hstars.svg" alt="" />}
        {avg < 4.3 && avg >= 3.8 && <img src="/4stars.svg" alt="" />}
        {avg < 3.8 && avg >= 3.3 && <img src="/3Hstars.svg" alt="" />}
        {avg < 3.3 && avg >= 3.8 && <img src="/3stars.svg" alt="" />}
        {avg < 2.8 && avg >= 2.3 && <img src="/2Hstars.svg" alt="" />}
        {avg < 2.3 && avg >= 1.8 && <img src="/2stars.svg" alt="" />}
        {avg < 1.8 && avg >= 1.3 && <img src="/1Hstars.svg" alt="" />}
        {avg < 1.8 && <img src="/1stars.svg" alt="" />}
        <h3>{comments.length} Opiniones</h3>
      </div>
      <Button as="div" className="b-Best" variant="dark" size="sm">
        <Link to={`/dishes/${_id}`}>Ver más ></Link>
      </Button>
    </div>
  );
};

export default DishCard;
