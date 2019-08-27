import React from "react";
import "./App.css";
// import { numberLiteralTypeAnnotation } from "@babel/types";

function AnswerItem(props) {
  return (
    <li
      className="Answer-main"
      onClick={() =>
        props.answerClicked([
          props.card.answer,
          props.card.value,
          props.card.whatIs
        ])
      }
    >
      {props.card.value}
    </li>
  );
}

function AnswerList(props) {
  const answers = props.answers;
  const listAnswers = answers.map((answer, index) => (
    <AnswerItem
      // key={numberLiteralTypeAnnotation.toString()}
      key={index}
      card={answer}
      answerClicked={props.answerClicked}
    />
  ));
  return <ul>{listAnswers}</ul>;
}

export default AnswerList;
