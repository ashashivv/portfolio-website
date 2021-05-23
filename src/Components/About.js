import React from "react";
import profile from "../assets/images/profile.jpeg";

const About = () => {
  return (
    <>
      <div className="container-fluid about pb-5">
        <h1 className="name mt-5">Asha</h1>
        <h2 className="job">Frontend developer</h2>
        <div className="image">
          <img src={profile} alt="Avatar" />
        </div>
        <p className="paragraph">
          Hello! I am Asha,I have being developing website using HTML, CSS,
          Javascript and Front-end technoloiges using React. I create responsive
          websites that are displayed on all devices and smartphones.I'm
          passionate about creating website using React which is javascript
          library.
        </p>
        <h4 className="get">Get In Touch</h4>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/asha-s-6761b11bb"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a href="https://github.com/ashashivv" target="_blank">
            <i className="fab fa-github"></i>
          </a>

          <a href="https://codepen.io/ashagowda" target="_blank">
            <i className="fab fa-codepen"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
