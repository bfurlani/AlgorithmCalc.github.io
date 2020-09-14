import { A } from "hookrouter";
import React, { Component } from "react";
import "../styles/home.css";
class Home extends Component {
  state = {};
  render() {
    return (
      <div class="home">
        <h3>Welcome!</h3>
        <p>Please choose an algorithm to get started</p>
      </div>
    );
  }
}

export default Home;
