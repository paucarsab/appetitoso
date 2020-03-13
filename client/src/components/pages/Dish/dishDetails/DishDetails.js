import React, { Component } from "react";
import { Link } from "react-router-dom";

import dishesServices from "../../../../services/dish.services";
import editServices from "../../../../services/edit.services";

import "./dish-details.scss";

class dishDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { dish: null, user: this.props.loggedInUser };
    this.services = new dishesServices();
    this.editServices = new editServices();
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.postfavDish();
  };

  postfavDish = () => {
    let newFavDish = {
      dish: this.state.dish._id,
      score: this.state.score,
      comment: this.state.comment
    };
    this.editServices.getNewFavDish(this.state.user._id, newFavDish);
  };

  componentDidMount = () => this.getdishDetails();

  getdishDetails = () => {
    this.services
      .getdishDetails(this.props.match.params.id)
      .then(thedish => this.setState({ dish: thedish }))
      .catch(err => console.log(err));
  };

  scoreReduce = x => {
    let sum = x.reduce((previous, current) => (current += previous));
    let avg = sum / x.length;
    return Math.round(avg * 100) / 100;
  };

  render() {
    return (
      <div>
        {this.state.dish ? (
          <div className="dishDetailsGlobal">
            <div className="dish-details">
              <img src={this.state.dish.photo} alt={this.state.dish.name} />
              <div>
                <h1>{this.state.dish.name}</h1>
                <h3>{this.state.dish.restaurant_id.name}</h3>
                <h3>{this.state.dish.restaurant_id.address}</h3>
                <h3>Web: {this.state.dish.restaurant_id.web}</h3>
                <h3>Tlf: {this.state.dish.restaurant_id.phone}</h3>
                <h2>Ingredientes:</h2>
                <ul>
                  {this.state.dish.ingredients.map((elm, idx) => (
                    <li key={`ingr${idx}`}>  {elm} </li>
                  ))}
                </ul>
                <h2>Intolerancias:</h2>
                <h3 className="intolerances">
                  {this.state.dish.intolerances.map(elm =>
                    elm === "Gluten" ? (
                      <img
                        title="Contiene gluten"
                        src="../../../../Int_gluten.svg"
                        alt=""
                      />
                    ) : null
                  )}
                  {this.state.dish.intolerances.map(elm =>
                    elm === "Shellfish" ? (
                      <img
                        title="Crustáceos"
                        src="../../../../Int_Crustaceans.svg"
                        alt=""
                      />
                    ) : null
                  )}
                  {this.state.dish.intolerances.map(elm =>
                    elm === "Egg" ? (
                      <img
                        title="Huevos"
                        src="../../../../Int_Egg.svg"
                        alt=""
                      />
                    ) : null
                  )}
                  {this.state.dish.intolerances.map(elm =>
                    elm === "Fish" ? (
                      <img
                        title="Pescado"
                        src="../../../../Int_Fish.svg"
                        alt=""
                      />
                    ) : null
                  )}
                  {this.state.dish.intolerances.map(elm =>
                    elm === "Peanuts" ? (
                      <img
                        title="Cacahuetes"
                        src="../../../../Int_Peanuts.svg"
                        alt=""
                      />
                    ) : null
                  )}
                  {this.state.dish.intolerances.map(elm =>
                    elm === "Soy" ? (
                      <img title="Soja" src="../../../../Int_Soy.svg" alt="" />
                    ) : null
                  )}
                  {this.state.dish.intolerances.map(elm =>
                    elm === "Dairy" ? (
                      <img
                        title="Lácteos"
                        src="../../../../Int_Dairy.svg"
                        alt=""
                      />
                    ) : null
                  )}
                  {this.state.dish.intolerances.map(elm =>
                    elm === "Tree Nuts" ? (
                      <img
                        title="Frutos de Cáscara"
                        src="../../../../Int_TreeNuts.svg"
                        alt=""
                      />
                    ) : null
                  )}
                  {this.state.dish.intolerances.map(elm =>
                    elm === "Celery" ? (
                      <img
                        title="Apio"
                        src="../../../../Int_Celery.svg"
                        alt=""
                      />
                    ) : null
                  )}
                  {this.state.dish.intolerances.map(elm =>
                    elm === "Mustard" ? (
                      <img
                        title="Mostaza"
                        src="../../../../Int_Mustard.svg"
                        alt=""
                      />
                    ) : null
                  )}
                  {this.state.dish.intolerances.map(elm =>
                    elm === "Sesame" ? (
                      <img
                        title="Granos de Sésamo"
                        src="../../../../Int_sesame.svg"
                        alt=""
                      />
                    ) : null
                  )}
                  {this.state.dish.intolerances.map(elm =>
                    elm === "Sulphur Dioxide" ? (
                      <img
                        title="Dióxido de Azufre"
                        src="../../../../Int_sulphur.svg"
                        alt=""
                      />
                    ) : null
                  )}
                  {this.state.dish.intolerances.map(elm =>
                    elm === "Lupin" ? (
                      <img
                        title="Altramuces"
                        src="../../../../Int_Lupin.svg"
                        alt=""
                      />
                    ) : null
                  )}
                  {this.state.dish.intolerances.map(elm =>
                    elm === "Molluscs" ? (
                      <img
                        title="Moluscos"
                        src="../../../../Int_Molluscs.svg"
                        alt=""
                      />
                    ) : null
                  )}
                </h3>
              </div>
              <div className="details-right">
                <div>
                  <h2> Valoración de los usuarios: {this.scoreReduce(this.state.dish.score)}</h2>
                  {this.state.dish.comments && (
                    <h3>{this.state.dish.comments.length + 1} Valoraciones</h3>
                  )}
                </div>
                <div>
                  <h1>Precio: {this.state.dish.price} €</h1>
                  <Link to={`/rest/${this.state.dish.restaurant_id._id}`}>
                    <h3>Ver más de este restaurante ></h3>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={e => this.handleSubmit(e)} className="formComment">
                <h3>Valoración:</h3>
                <input
                  name="score"
                  type="number"
                  className="scoreArea"
                  min="0"
                  max="5"
                  onChange={this.handleChange}
                />
                <h3>Comentario:</h3>
                <input
                  name="comment"
                  type="TextArea"
                  className="textArea"
                  onChange={this.handleChange}
                />
                <button>Enviar comentario</button>
              </form>
            </div>
            <div>
              {this.state.dish.comments.map(elm => (
                <div key={elm.user._id} className="commentDetail">
                  <img src={elm.user.profile_photo} alt="" />
                  <h3 className="userComment"> {elm.user.username}: </h3>
                  <h3> "{elm.comment}"</h3>
                </div>
              ))}
            </div>
          </div>
        ) : (
            console.log("")
          )
        }
      </div>
    );
  }
}

export default dishDetails;
