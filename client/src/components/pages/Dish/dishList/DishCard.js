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
  rest,
  comments
}) => {

  return (
    <tr className="card-dish">
      <td>
        <img src={photo} className="photoDishSearch" alt="" />
      </td>
      <td className="centerCard">
        <h2>{name}</h2>
        <h3>{rest[0].name}</h3>
        <h3>{rest[0].address}</h3>
        <Button as="div" className="btn-More" variant="dark" size="sm">
          <Link to={`/dishes/${_id}`} >Ver más ></Link>
        </Button>

      </td>
      <td className="rightCard">
        <h2>Valoración: {Math.round(sumScore * 100) / 100} </h2>
        {sumScore >= 4.8 && <img className="scoreSearch" src="/5stars.svg" alt="" />}
        {sumScore < 4.8 && sumScore >= 4.3 && <img src="/4Hstars.svg" className="scoreSearch" alt="" />}
        {sumScore < 4.3 && sumScore >= 3.8 && <img src="/4stars.svg" className="scoreSearch" alt="" />}
        {sumScore < 3.8 && sumScore >= 3.3 && <img src="/3Hstars.svg" className="scoreSearch" alt="" />}
        {sumScore < 3.3 && sumScore >= 2.8 && <img src="/3stars.svg" className="scoreSearch" alt="" />}
        {sumScore < 2.8 && sumScore >= 2.3 && <img src="/2Hstars.svg" className="scoreSearch" alt="" />}
        {sumScore < 2.3 && sumScore >= 1.8 && <img src="/2stars.svg" className="scoreSearch" alt="" />}
        {sumScore < 1.8 && sumScore >= 1.3 && <img src="/1Hstars.svg" className="scoreSearch" alt="" />}
        {sumScore < 1.3 && <img src="/1stars.svg" className="scoreSearch" alt="" />}
        <h3>Nº valoraciones: {comments.length + 1}</h3>
        <h2>Precio: {price} €</h2>
      </td>
    </tr>
  );
};

export default DishCard;
