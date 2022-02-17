import React from "react";
import Filter from "../content/filter/filter";
import Card from "../content/products/card";

function Content() {
  return (
    <main className="contentArea">
      <Filter />
      <div className="contentInside">
        <Card />
      </div>
    </main>
  );
}

export default Content;
