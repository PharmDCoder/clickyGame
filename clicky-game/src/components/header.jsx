import React, { Component } from "react";

// class Header extends Component {
//   //   state = {
//   //   };
//   render(props) {
//     return (
//       <nav className="navbar fixed-top navbar-dark bg-dark justify-content-end">
//         <span className="navbar-brand">
//           Score: {props.score} | Top Score: {props.topScore}
//         </span>
//       </nav>
//     );
//   }
//   //   formatScore() {
//   //     const { score } = this.state;
//   //     return score === 0 ? "Zero" : score;
//   //   }
// }

function Header(props) {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark justify-content-end">
      <span className="navbar-brand">
        Score: {props.score} | Top Score: {props.topScore}
      </span>
    </nav>
  );
}
//   formatScore() {
//     const { score } = this.state;
//     return score === 0 ? "Zero" : score;
//   }

export default Header;
