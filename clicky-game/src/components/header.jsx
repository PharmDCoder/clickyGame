import React, { Component } from "react";

class Header extends Component {
  state = {
    score: 0,
    topScore: 0
  };
  render() {
    return (
      <div>
        <span>
          Score: {this.formatScore()} | Top Score: {this.state.topScore}
        </span>
      </div>
    );
  }
  formatScore() {
    const { score } = this.state;
    return score === 0 ? "Zero" : score;
  }
}

export default Header;
