import React from "react";

import "./DishCardRest.scss";

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
  rest,
  comments
}) => {

  //Realizar: Hay que cambiar el score

  return (
    <tr className="card-dish">
      <td>
        <img src={photo} alt="" />
      </td>
      <td>
        <h2>{name}</h2>
        <h3>{restaurant_id.name}</h3>
        <h3>{restaurant_id.address}</h3>
        <hr></hr>
        <Button as="div" variant="dark" size="sm">
          <Link to={`/dishes/${_id}`}>Ver más ></Link>
        </Button>
        <h2>Precio: {price} €</h2>
      </td>
      <td>
        <h3>{Math.round(score * 100) / 100} </h3>
        <h3>Valoraciones: {comments.length + 1}</h3>
        {score >= 4.8 && <img src="/5stars.svg" className="scoreImg" alt="" />}
        {score < 4.8 && score >= 4.3 && <img src="/4Hstars.svg" className="scoreImg" alt="" />}
        {score < 4.3 && score >= 3.8 && <img src="/4stars.svg" className="scoreImg" alt="" />}
        {score < 3.8 && score >= 3.3 && <img src="/3Hstars.svg" className="scoreImg" alt="" />}
        {score < 3.3 && score >= 2.8 && <img src="/3stars.svg" className="scoreImg" alt="" />}
        {score < 2.8 && score >= 2.3 && <img src="/2Hstars.svg" className="scoreImg" alt="" />}
        {score < 2.3 && score >= 1.8 && <img src="/2stars.svg" className="scoreImg" alt="" />}
        {score < 1.8 && score >= 1.3 && <img src="/1Hstars.svg" className="scoreImg" alt="" />}
        {score < 1.3 && <img src="/1stars.svg" className="scoreImg" alt="" />}
      </td>
    </tr>
  );
};

export default DishCard;
