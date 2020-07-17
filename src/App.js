import React from "react";
import logo from "./images/LogoSVG.svg";
import "./App.css";
import "./fonts/index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <div>
          <p className="text-body">
            Uma nova forma de desenvolver seus projetos. Bem vindo ao século 21.
          </p>
          <p></p>
        </div>
      </body>
    </div>
  );
}

export default App;
