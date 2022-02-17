import React from "react";
import FilterSelect from "../content/filter/filter";
import Card from "../content/products/card";

function Content() {
  return (
    <main className="contentArea">
      <FilterSelect />
      <div className="contentInside">
        <Card />
      </div>
    </main>
  );
}

export default Content;
