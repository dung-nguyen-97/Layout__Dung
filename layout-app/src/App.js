import React from "react";

// import component
import Header from "./Component/Header";
import Carousel from "./Component/Carousel";
import Service from "./Component/Service";
import Work from "./Component/Work";

import "./App.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Service />
      <hr />
      <Work />
      <br />
    </div>
  );
}

export default App;
