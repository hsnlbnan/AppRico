import "../src/sass/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/Header";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
