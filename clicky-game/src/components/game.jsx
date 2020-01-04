import React, { Component } from "react";
import Header from "./header";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";
import img10 from "../images/img10.jpg";
import img11 from "../images/img11.jpg";
import img12 from "../images/img12.jpg";

class Game extends Component {
  state = {
    sources: [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12
    ],
    score: 0,
    topScore: 0
  };

  handleClick = event => {
    let selectedImg = document.getElementById(event.target.id);
    if (selectedImg.getAttribute("clicked") === "false") {
      selectedImg.setAttribute("clicked", "true");
      this.setState({ score: this.state.score + 1 });
      shuffle();
    } else {
      console.log("GAME OVER");
      this.setState({ score: 0 });
      console.log("Score when you lose " + this.state.score);
    }
  };

  render() {
    return (
      <div>
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
        ></Header>
        <main className="container">
          <div className="row" style={{ "margin-top": 70 }}>
            <div className="col-12">
              <ul className="d-flex flex-wrap">
                {this.state.sources.map((source, index) => (
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
