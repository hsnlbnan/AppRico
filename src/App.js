import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../src/sass/index.scss";
import Header from "./components/header/Header";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
function App() {
  const [data, setData] = useState("");
  const [productFilter, setProductFilter] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  useEffect(() => {
    if (data.length > 0) {
      const productDataFilter = data.filter((product) => {
        if (productFilter !== "") return product.brand_name === productFilter;
        return product;
      });
      setData(productDataFilter);
    }
  }, [productFilter]);

  useEffect(() => {
    if (data.length > 0) {
      const stateDataFilter = data.filter((product) => {
        if (stateFilter !== "") return product.address.state === stateFilter;
        return product;
      });

      setData(stateDataFilter);
    }
  }, [stateFilter]);

  useEffect(() => {
    if (data.length > 0) {
      const cityDataFilter = data.filter((product) => {
        if (cityFilter !== "") return product.address.city === cityFilter;
        return product;
      });
      setData(cityDataFilter);
    }
  }, [cityFilter]);

  const getData = async () => {
    const resolve = await fetch("https://assessment-edvora.herokuapp.com");
    const data = await resolve.json();
    setData(data);
  };

  useEffect(() => getData(), []);

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
