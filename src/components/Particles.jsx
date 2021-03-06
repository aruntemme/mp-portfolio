import React, { Component } from "react";
import Particles from "react-particles-js";

const PARAMS = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: [
        "#FF6961",
        "#FFD300",
        "#90EE90",
        "#4DC9FF",
        "#C311E7",
        "#ffffff",
        "#000000",
      ],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.9,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.5,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 30,
        size_min: 0.1,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 110,
      color: "#777777",
      opacity: 0.5,
      width: 1.2,
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: true,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 60,
        duration: 5,
        opacity: 8,
        speed: 2,
      },
      repulse: {
        distance: 100,
        duration: 1,
      },
      push: {
        particles_nb: 3,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  // 3m@62^K^88745%
};

class Particle extends Component {
  render() {
    return (
      <div id="particles-js">
        <Particles width="100vw" height="100vh" params={PARAMS} />
      </div>
    );
  }
}

export default Particle;
