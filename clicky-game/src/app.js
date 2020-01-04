import React, { Component } from "react";
import Header from "./components/header";
import Game from "./components/game";
import Jumbotron from "./components/jumbotron";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Game />
      </main>
    );
  }
}

export default App;
