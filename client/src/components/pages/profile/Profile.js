import React from "react";
import DishCard from "../Dish/dishList/DishCard";
import "./Profile.scss";

const Profile = props => (
  <div className="profile">
    <h1>Bienvenido a tu perfil, {props.loggedInUser.username}</h1>
    <img src={props.loggedInUser.profile_photo} alt="" />
    <h3>Email: {props.loggedInUser.email}</h3>
    <h3>Tus platos guardados:</h3>
    <div>
      {props.loggedInUser.favDishes.map(dish => (
        <DishCard key={dish._id} {...dish} />
      ))}
    </div>
  </div>
);

export default Profile;
