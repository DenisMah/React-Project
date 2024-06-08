import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutme">
      <div className="aboutMe">
        <div className="aboutMePicture">
          <img src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        </div>
        <div className="aboutMeText">
          <h2>About me</h2>
          <h4>
            Professional full-stack developer with experience in web
            development, networking and s
          </h4>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
