import React from "react";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div>
        <h3>{props.results.word}</h3>
      </div>
    );
  } else {
    return null;
  }
}
