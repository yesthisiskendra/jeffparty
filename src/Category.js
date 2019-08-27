import React from "react";
import AnswerList from "./AnswerList";
import "./App.css";

function Category(props) {
  return (
    <div className="Category-main column">
      <h1>{props.categoryText}</h1>
      {/* <AnswerList answers={["pippin", "uli", "michael", "phyllis", "dwight"]} /> */}
      <AnswerList answers={["$100", "$200", "$300", "$400", "$500"]} />
    </div>
  );
}

export default Category;
