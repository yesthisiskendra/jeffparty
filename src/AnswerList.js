import React from "react";
import "./App.css";
import { numberLiteralTypeAnnotation } from "@babel/types";

function AnswerItem(props) {
  return <li className="Answer-main">{props.value}</li>;
}

function AnswerList(props) {
  const answers = props.answers;
  const listAnswers = answers.map(answer => (
    <AnswerItem key={numberLiteralTypeAnnotation.toString()} value={answer} />
  ));
  return <ul>{listAnswers}</ul>;
}

export default AnswerList;
