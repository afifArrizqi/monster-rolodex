import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
import "./App.css";
import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.setState({ monsters: data });
  }

  searchHandler(event) {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="title">Monster Rolodex</h1>
        <SearchBox
          placeholder="search for a monster"
          onSearch={this.searchHandler}
          value={searchField}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
