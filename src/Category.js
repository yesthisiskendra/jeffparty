import React from "react";
import AnswerList from "./AnswerList";
import "./App.css";

function Category(props) {
  return (
    <div className="Category-main column">
      <h1>{props.categoryText}</h1>
      <AnswerList answers={props.cards} answerClicked={props.answerClicked} />
    </div>
  );
}

export default Category;
