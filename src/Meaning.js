import React from "react";

export default function Meaning(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meanning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p>{definition.example}</p>
          </div>
        );
      })}{" "}
    </div>
  );
}
