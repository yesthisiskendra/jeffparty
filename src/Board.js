import React from "react";
import Category from "./Category";
import "./App.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board_name: "first board"
    };
  }

  render() {
    return (
      <div className="Board-main">
        <h1 className="centered"> Welcome to Jeffparty</h1>
        <div className="row">
          <Category categoryText="Cat Facts" />
          <Category categoryText="Dog Facts" />
          <Category categoryText="Birb Facts" />
          <Category categoryText="Stonks Facts" />
          <Category categoryText="Rat Facts" />
          <Category categoryText="Human Facts" />
        </div>
      </div>
    );
  }
}

export default Board;
