import React, { useState, useEffect } from "react";
import menuOpen from "../../../assets/icons/filter-open.svg";
import menuClose from "../../../assets/icons/filter-close.svg";

function getUnique(arr, comp) {
  //store the comparison  values in array
  const unique = arr
    .map((e) => e[comp])
    // store the indexes of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)
    // eliminate the false indexes & return unique objects
    .filter((e) => arr[e])
    .map((e) => arr[e]);

  return unique;
}

function FilterSelect({ updateFilter }) {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const [openFilter, setopenFilter] = useState(false);
  const toggleMenu = () => setopenFilter((openFilter) => !openFilter);
  const closeButton = () =>
    `right-filter float-right ${openFilter ? "open" : ""}`;
  const filterMenu = () => `hamburger_img ${openFilter ? "close" : ""}`;

  const handleChange = (e) => {
    setValue(e.target.value);
    updateFilter(e.target.value);
  };
  useEffect(() => {
    fetch(`https://api.jsonbin.io/b/620d9bd74bf50f4b2dff1d6e/2`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())

      .then((data) => {
        setData(data);
      });
  }, []);
  const uniqueBrand = getUnique(data, "brand");
  const uniqueModel = getUnique(data, "model");
  const uniqueStatus = getUnique(data, "status");
  const uniqueDate = getUnique(data, "date");
  const uniquesellerType = getUnique(data, "sellerType");
  return (
    <div className="filterArea">
      <form action="" method="get">
        <div className={filterMenu()} onClick={toggleMenu}>
          <img src={menuOpen} alt="Menu bar" />
        </div>
        <div className={closeButton()}>
          <div className="closeIcon" onClick={toggleMenu}>
            <img src={menuClose} alt="Menu Close" />
          </div>
          <div className="filterMenu">
            <span className="filterArea_title">Search</span>
            <select name="brand" key="{data.brand}">
              <option value="" onChange={handleChange}>
                Select Brand
              </option>
              {uniqueBrand?.map((item) => (
                <option value={item.brand} key="key">
                  {item.brand}
                </option>
              ))}
            </select>
            <select name="model">
              <option value="">Select Model</option>
              {uniqueModel?.map((item) => (
                <option value={item.model}>{item.model}</option>
              ))}
            </select>
            <select>
              <option value="">Used Cars for Sale</option>

              {uniqueStatus?.map((item) => (
                <option value={item.status}>{item.status}</option>
              ))}
            </select>
            <select>
              {uniqueDate?.map((item) => (
                <option value={item.date}>{item.date}</option>
              ))}
            </select>
            <span className="filterArea_title">Price Range</span>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Min"
                aria-label="Min"
                aria-describedby="basic-addon2"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Max"
                aria-label="Min"
                aria-describedby="basic-addon2"
              />
            </div>

            <select>
              <option value="">Seller Type</option>
              {uniquesellerType?.map((item) => (
                <option value={item.sellerType}>{item.sellerType}</option>
              ))}
            </select>
            <span className="filterArea_title">Badge</span>
            <div className="checkboxArea">
              <label>
                <input type="checkbox" />
                Full Service History
              </label>
              <label>
                <input type="checkbox" />
                Negotiable
              </label>
              <label>
                <input type="checkbox" />
                Under Warrenty
              </label>
              <label>
                <input type="checkbox" />
                Urgent
              </label>
            </div>
            <span className="filterArea_title">Car Report</span>
            <div className="checkboxArea">
              <label>
                <input type="checkbox" />
                Full Service History
              </label>
              <span className="filterArea_title">Content Language</span>
              <div className="checkboxArea">
                <label>
                  <input type="checkbox" />
                  Full Service History
                </label>
              </div>
            </div>
            <button className="filterArea_button">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FilterSelect;
