import React, { Component } from "react";
import authServices from "../../../services/auth.services";
import Container from "react-bootstrap/Container";
import FavDish from "../../pages/profile/FavoriteDish/FavDish";
import "./Profile.scss";

class Profile extends Component {
  constructor() {
    super();
    this.state = { user: null };
    this.services = new authServices();
  }

  componentDidMount = () => {
    this.fetchUser();
  };

  fetchUser = () => {
    this.services
      .getFavDishes(this.props.loggedInUser._id)
      .then(userFound => {
        this.setState({
          user: userFound
        });
      })
      .catch(() => this.setState({ user: false }));
  };

  scoreReduce = x => {
    let sum = x.reduce((previous, current) => (current += previous));
    let avg = sum / x.length;
    return Math.round(avg * 100) / 100;
  };

  render() {
    return (
      <div>
        {this.state.user ? (
          <div className="profileCont">
            <h1>
              Bienvenido a tu perfil, {this.state.user.dishes[0].username}
            </h1>
            <h2>Tus datos de perfil:</h2>
            <div className="profileData">
              <img className="profilePhoto"
                src={this.state.user.dishes[0].profile_photo}
                alt={this.state.user.dishes[0].username}
              />
              <div>
                <h3>Nombre de usuario: {this.state.user.dishes[0].username}</h3>
                <h3>Email: {this.state.user.dishes[0].email}</h3>
              </div>
            </div>
            <h2>Estos son tus platos guardados:</h2>
            <div className="dishBoxData">
              {this.state.user.dishes[0].userFavDishes.map((dish, idx) => (
                <div className="dishData">
                  <div>
                    <FavDish key={dish._id} {...dish} />
                    <h3>
                      Restaurante: {this.state.user.dishes[0].favRest[idx].name}
                    </h3>
                  </div>
                  <div className="rightDataDish">
                    <h3>
                      Comentario:
                      {this.state.user.dishes[0].favDishes[idx].comment}
                    </h3>
                    <div>
                      <h3>
                        Mi valoración:{" "}
                        {this.state.user.dishes[0].favDishes[idx].score}
                      </h3>
                      <h3>Valoración general: {this.scoreReduce(dish.score)}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
            <div>{console.log("El objecto está vacio")}</div>
          )}
      </div>
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
