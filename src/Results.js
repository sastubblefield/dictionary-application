import React from "react";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div>
        <h3>{props.results.word}</h3>
        {props.results.meanings.map(function(meaning, index){return meaning.definition[0].definition;})}
      </div>
    );
  } else {
    return null;
  }
}
