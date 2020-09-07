import React, { Component } from "react";
import Card from "../Card/Card.component";

import "./CardList.styles.css";

class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.monsters.map((monster) => {
          return <Card key={monster.id} {...monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
