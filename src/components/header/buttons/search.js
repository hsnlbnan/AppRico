import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import data from "../../../data.json";
function Search(props) {
  var items = [...new Set(data.map((item) => item))];

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  const formatResult = (item) => {
    console.log(item);
    return (
      <div className="result-wrapper">
        <span className="result-span">{item.name}</span>
        <span className="result-span result-span__model">{item.model}</span>
      </div>
    );
  };

  return (
    <div className={props.show ? "search-show" : "search-hide"}>
      <ReactSearchAutocomplete
        items={items}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        onClear={handleOnClear}
        styling={{ zIndex: 4 }}
        autoFocus
        formatResult={formatResult}
      />
    </div>
  );
}

export default Search;
