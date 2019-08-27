import React from "react";
import Category from "./Category";
import "./App.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winnings: 0,
      categories: [
        {
          category: "the office",
          cards: [
            {
              value: 100,
              whatIs: "Jim",
              answer: "Office character who loves Pam"
            },
            {
              value: 200,
              whatIs: "Angela",
              answer: "Office character who loves cats"
            },
            {
              value: 300,
              whatIs: "Dwight",
              answer: "Office character who love beets"
            }
          ]
        },
        {
          category: "Kendra's cats",
          cards: [
            {
              value: 100,
              whatIs: "Kevin",
              answer: "This kitten is the biggest"
            },
            {
              value: 200,
              whatIs: "Angela",
              answer: "This kitten is the smallest"
            },
            {
              value: 300,
              whatIs: "Dwight",
              answer: "This kitten is actually a girl"
            }
          ]
        },
        {
          category: "Kendra's cats",
          cards: [
            {
              value: 100,
              whatIs: "Kevin",
              answer: "This kitten is the biggest"
            },
            {
              value: 200,
              whatIs: "Angela",
              answer: "This kitten is the smallest"
            },
            {
              value: 300,
              whatIs: "Dwight",
              answer: "This kitten is actually a girl"
            }
          ]
        },
        {
          category: "Kendra's cats",
          cards: [
            {
              value: 100,
              whatIs: "Kevin",
              answer: "This kitten is the biggest"
            },
            {
              value: 200,
              whatIs: "Angela",
              answer: "This kitten is the smallest"
            },
            {
              value: 300,
              whatIs: "Dwight",
              answer: "This kitten is actually a girl"
            }
          ]
        },
        {
          category: "Kendra's cats",
          cards: [
            {
              value: 100,
              whatIs: "Kevin",
              answer: "This kitten is the biggest"
            },
            {
              value: 200,
              whatIs: "Angela",
              answer: "This kitten is the smallest"
            },
            {
              value: 300,
              whatIs: "Dwight",
              answer: "This kitten is actually a girl"
            }
          ]
        },
        {
          category: "Kendra's cats",
          cards: [
            {
              value: 100,
              whatIs: "Kevin",
              answer: "This kitten is the biggest"
            },
            {
              value: 200,
              whatIs: "Angela",
              answer: "This kitten is the smallest"
            },
            {
              value: 300,
              whatIs: "Dwight",
              answer: "This kitten is actually a girl"
            }
          ]
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(answer) {
    const response = prompt(answer[0], "What/who is:");
    // TODO: check if response is correct
    // TODO: better way to increment state?
    this.setState({ winnings: (this.state.winnings += answer[1]) });
  }

  render() {
    return (
      <div className="Board-main">
        <h1 className="centered"> Welcome to Jeffparty </h1>
        <h2 className="centered">Current winnings: ${this.state.winnings}</h2>
        <div className="row">
          {this.state.categories.map(category => (
            <Category
              categoryText={category.category}
              cards={category.cards}
              answerClicked={this.handleChange}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Board;
