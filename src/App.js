import React from "react";
import "../src/sass/index.scss";
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
