import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  let [keyword, getKeyword] = useState("");
  let [results, seeResults] = useState(null);
  function handleResponse(response) {
    seeResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    getKeyword(event.target.value);
  }

  return (
    <div>
      {" "}
      <form onSubmit={search} className="mt-5">
        <input
          className="form-control"
          type="search"
          placeholder="Type Here"
          onChange={handleKeyword}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
