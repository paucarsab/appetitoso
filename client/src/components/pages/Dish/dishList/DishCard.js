import React from "react";

import "./DishCard.scss";

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
        <h3>{rest[0].name}</h3>
        <h3>{rest[0].address}</h3>
        <hr></hr>
        <Button as="div" variant="dark" size="sm">
          <Link to={`/dishes/${_id}`}>Ver más ></Link>
        </Button>
        <h2>Precio: {price}</h2>
      </td>
      <td>
        <h3>{Math.round(sumScore * 100) / 100} </h3>
        <h3>{comments.length}</h3>
        {sumScore >= 4.8 && <img src="/5stars.svg" alt="" />}
        {sumScore < 4.8 && sumScore >= 4.3 && <img src="/4Hstars.svg" alt="" />}
        {sumScore < 4.3 && sumScore >= 3.8 && <img src="/4stars.svg" alt="" />}
        {sumScore < 3.8 && sumScore >= 3.3 && <img src="/3Hstars.svg" alt="" />}
        {sumScore < 3.3 && sumScore >= 2.8 && <img src="/3stars.svg" alt="" />}
        {sumScore < 2.8 && sumScore >= 2.3 && <img src="/2Hstars.svg" alt="" />}
        {sumScore < 2.3 && sumScore >= 1.8 && <img src="/2stars.svg" alt="" />}
        {sumScore < 1.8 && sumScore >= 1.3 && <img src="/1Hstars.svg" alt="" />}
        {sumScore < 1.3 && <img src="/1stars.svg" alt="" />}
      </td>
    </tr>
  );
};

export default DishCard;
