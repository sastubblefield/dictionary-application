import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, getKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} meaning`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
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
    </div>
  );
}
