import React, { Component } from "react";

import "./SearchBox.styles.css";

class SearchBox extends Component {
  searchHandler = (event) => {
    this.props.onSearch(event);
  };
  render() {
    return (
      <div>
        <input
          type="search"
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.searchHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
