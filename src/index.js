import React from "react";
import ReactDOM from "react-dom";

import Table from "./Table";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Blueprintjs/table infinite load</h1>
      <h2>Start scroll to see some magic happen!</h2>

      <Table />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
