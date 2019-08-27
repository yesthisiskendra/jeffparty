import React from "react";
import "./App.css";
import { numberLiteralTypeAnnotation } from "@babel/types";

function answerClicked() {
  const answer = prompt("What is your favorite color", "");
  console.log("has been clicked!", answer);
}

function AnswerItem(props) {
  return (
    <li className="Answer-main" onClick={answerClicked}>
      {props.value}
    </li>
  );
}

function AnswerList(props) {
  const answers = props.answers;
  const listAnswers = answers.map(answer => (
    <AnswerItem key={numberLiteralTypeAnnotation.toString()} value={answer} />
  ));
  return <ul>{listAnswers}</ul>;
}

export default AnswerList;
