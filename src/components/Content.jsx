import React, { Component } from "react";
import Typical from "react-typical";
class Content extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="name" aria-label="My name is Mohana Priya">
          I'm Mohana Priya
        </h1>
        <h2 className="title" aria-label="I am a software engineer">
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={["I'm an Engineering Student", 1000, "@ KIOT", 1000]}
          />
        </h2>
      </div>
    );
  }
}

export default Content;
