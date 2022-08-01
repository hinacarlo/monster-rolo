import React, { Component } from "react";
import "./SearchBox.css";

export class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type='search'
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      ></input>
    );
  }
}

export default SearchBox;
