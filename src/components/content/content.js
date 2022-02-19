import React, { useState, useMemo } from "react";
import FilterSelect from "../content/filter/filter";
import Card from "../content/products/card";
import Pagination from "../pagination/pagination";
import data from "../../data.json";
import PageTitle from "../header/pageTitle/pageTitle";

let PageSize = 3;

function Content() {
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <main className="contentArea">
      <PageTitle />
      <FilterSelect />
      <div className="contentInside">
        <Card />
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </main>
  );
}

export default Content;
