import React, { Component } from "react";
import Audio from "./Audio";
import sounds from "../sounds";
import "./App.css";

class App extends Component {
  handleKeyPress = () => {
    const playSound = event => {
      const audio = document.querySelector(`audio[datakey="${event.keyCode}"]`);
      const key = document.querySelector(
        `.drum-kit[datakey="${event.keyCode}"]`
      );
      if (!audio) return;
      audio.currentTime = 0;
      audio.play();
      key.classList.add("playing");
    };

    window.addEventListener("keydown", playSound);
  };

  componentDidMount() {
    this.handleKeyPress();
    const keys = document.querySelectorAll(".drum-kit");
    keys.forEach(key =>
      key.addEventListener("transitionend", this.removeTransition)
    );
  }

  removeTransition(event) {
    if (event.propertyName !== "transform") return;
    this.classList.remove("playing");
  }

  render() {
    return (
      <div id="drum-machine" className="bg-image">
        <h1>Drum Machine</h1>
        <div id="container">
          <Audio sounds={sounds} />
        </div>
      </div>
    );
  }
}

export default App;
