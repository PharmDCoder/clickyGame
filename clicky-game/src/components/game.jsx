import React, { Component } from "react";
import Header from "./header";
import Sources from "../data";
import Jumbotron from "./jumbotron";

class Game extends Component {
  state = {
    Sources,
    score: 0,
    topScore: 0
  };

  handleClick = event => {
    let selectedImg = document.getElementById(event.target.id);
    if (selectedImg.getAttribute("clicked") === "false") {
      selectedImg.setAttribute("clicked", "true");
      this.setState({ score: this.state.score + 1 });
      if (this.state.score >= this.state.topScore) {
        this.setState({ topScore: this.state.score + 1 });
      }
    } else {
      console.log("GAME OVER");
      this.setState({ score: 0 });
      let reset = document.getElementsByClassName("img-fluid");
      for (let i = 0; i < 12; i++) {
        reset[i].setAttribute("clicked", false);
      }
    }
    shuffle();
  };

  render() {
    return (
      <div>
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
        ></Header>
        <Jumbotron></Jumbotron>
        <main className="container">
          <div className="row" style={{ "margin-top": 70 }}>
            <div className="col-12">
              <ul className="d-flex flex-wrap">
                {this.state.Sources.map((source, index) => (
                  <img
                    onClick={this.handleClick}
                    key={source}
                    className="img-fluid col-3 p-1"
                    {...index}
                    clicked="false"
                    src={source}
                    alt=""
                    id={source}
                  />
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const shuffle = () => {
  let imgList = document.getElementsByClassName("img-fluid");
  for (let i = 0; i < 12; i++) {
    let randNum = Math.floor(Math.random() * 12);
    imgList[i].className = "order-" + randNum + " img-fluid col-3 p-1";
  }
};

export default Game;
