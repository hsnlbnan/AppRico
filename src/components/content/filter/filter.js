import React, { useState, useEffect } from "react";

function FilterSelect({ updateFilter }) {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    updateFilter(e.target.value);
    console.log(setValue);
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

  return (
    <div className="filterArea">
      <span className="filterArea_title">Search</span>
      <select>
        <option value={value} onChange={handleChange}>
          Select Brand
        </option>
        {data?.map((item) => (
          <option value={item.brand}>{item.brand}</option>
        ))}
      </select>
      <select>
        <option value="">Select Model</option>
        {data?.map((item) => (
          <option value={item.model}>{item.model}</option>
        ))}
      </select>
      <select>
        <option value="">Used Cars for Sale</option>

        {data?.map((item) => (
          <option value={item.status}>{item.status}</option>
        ))}
      </select>
      <select>
        {data?.map((item) => (
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
        {data?.map((item) => (
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
  );
}

export default FilterSelect;
