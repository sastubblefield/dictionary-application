import React from "react";

export default function Results(props) {
  if (props.results) {
    return <div>hello from results</div>;
  } else {
    return null;
  }
}
