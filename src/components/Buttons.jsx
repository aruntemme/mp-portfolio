import React, { Component } from "react";

import Instagram from "./../assets/icons/Instagram";

import LinkedIn from "./../assets/icons/LinkedIn";
import File from "./../assets/icons/File";
import Email from "./../assets/icons/Email";

const DATA = [
  {
    href: "https://instagram.com/_priyaa_kumar",
    aria:
      "Visit my Instagram profile to learn more about the projects I have created and contributed to",
    icon: <Instagram />,
    label: "Insta",
  },
  {
    href: "https://www.linkedin.com/in/mohanapriya-kumar-74148417a",
    aria:
      "Visit my LinkedIn profile to learn more about my education and work experience",
    icon: <LinkedIn />,
    label: "LinkedIn",
  },
  {
    href: "",
    aria: "Visit Google Drive to view and download a copy of my resume",
    icon: <File />,
    label: "Resume",
  },
  {
    href: "mailto:priyakumar99@gmail.com",
    aria: "Open a pre-addressed email prompt to me that you can fill out",
    icon: <Email />,
    label: "Email",
  },
];

const Button = ({ href, aria, icon, label }) => {
  return (
    <span className="button-container">
      <a
        className="button"
        href={href}
        target="_self"
        aria-label={aria}
        rel="noopener noreferrer"
      >
        <div className="icon">{icon}</div>
        <span className="icon_title">{label}</span>
      </a>
    </span>
  );
};

class Buttons extends Component {
  render() {
    return (
      <div>
        {DATA.map((props, i) => (
          <Button {...props} key={i} />
        ))}
      </div>
    );
  }
}

export default Buttons;
