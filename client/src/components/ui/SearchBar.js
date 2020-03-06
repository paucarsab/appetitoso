import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./SearchBar.scss";

import { Link } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      redirect: null,
    };
  }

  handleChange(event) {
    const newValueSearch = event.target.value;
    this.setState({
      search: newValueSearch
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("entra");
   this.setState({
       redirect: `/dishes/search/${this.state.search}`
   })
  }

  render() {
    if (this.state.redirect) {
    return <Redirect to={this.state.redirect} />
  }
  return(
      <div className="searchBar">
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="Ej. Spaghetti"
            onChange={event => this.handleChange(event)}
          />
          <button>Buscar</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
