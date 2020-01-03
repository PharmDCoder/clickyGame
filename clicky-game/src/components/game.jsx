import React, { Component } from "react";
import

class Game extends Component {
  state = {
    imgSrcArr: "../../public/images/img1.jpg",
    count: 0
  };
  render() {
    return (
      <img className="img-fluid" src={this.state.imgSrcArr} alt="first image" />
    );
  }
}

export default Game;
