import React, { Component } from "react";
import authServices from "../../../services/auth.services";
import Container from "react-bootstrap/Container";
import FavDish from "../../pages/profile/FavoriteDish/FavDish";
import "./Profile.scss";

class Profile extends Component {
  constructor() {
    super();
    this.state = { loggedInUser: false, favDishes: [] };
    this.services = new authServices();
  }

  componentDidMount = () => {
    this.fetchUser();
  };

  fetchUser = () => {
    this.services
      .getFavDishes(this.props.loggedInUser._id)
      .then(favDishes => {
        this.setState({
          loggedInUser: this.props.loggedInUser,
          favDishes: favDishes[0]
        });
      })
      .catch(() => this.setState({ loggedInUser: false }));
  };

  // fetchUser = () => {
  //   this.services
  //     .getFavDishes(this.props.loggedInUser._id)
  //     .then(favDishes => {
  //       this.setState({
  //         loggedInUser: this.props.loggedInUser,
  //         favDishes: favDishes
  //       });
  //     })
  //     .catch(() => this.setState({ loggedInUser: false }));
  // };

  render() {
    return (
      <Container className="profile">
        {this.state.loggedInUser ? (
          <div>
            <h1>Bienvenido a tu perfil, {this.props.loggedInUser.username}</h1>
            <img
              src={this.props.loggedInUser.profile_photo}
              alt={this.props.loggedInUser.username}
            />
            <h3>Email: {this.props.loggedInUser.email}</h3>
            <div>
              {this.state.favDishes.map(dish => (
                <div className="dishData">
                  <FavDish key={dish._id} {...dish.dish} />
                  <h3>Puntuación: {dish.score}</h3>
                  <h3>Comentario: {dish.comment}</h3>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>{console.log("El objecto está vacio")}</div>
        )}
      </Container>
    );
  }
}

// Ok, voy a ver como está la que funcionaba primero
// Entiendo que

//funcion que funcionaba antes

// const Profile = props => (
//   <div className="profile">
//     <h1>Bienvenido a tu perfil, {props.loggedInUser.username}</h1>
//     <img src={props.loggedInUser.profile_photo} alt="" />
//     <h3>Email: {props.loggedInUser.email}</h3>
//     <h3>Tus platos guardados:</h3>
//     <div>
//       {props.loggedInUser.favDishes.map(dish => (
//         <div>
//           {console.log(props.loggedInUser.favDishes)}
//           <h2>{dish.dish}</h2>
//           <h2>{dish.score}</h2>
//           <h2>{dish.comment}</h2>
//         </div>
//       ))}
//     </div>
//   </div>
// );

export default Profile;
