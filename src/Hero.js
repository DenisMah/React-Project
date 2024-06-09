import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "@fontsource/roboto/700.css";
import { Typography } from "@mui/material";
import "./Hero.css";

function hero() {
  return (
    <div className="container herodiv">
      <div className="row">
        <div className="col-md-6 herodiv-information">
          <h1>Software Engineer </h1>
          <h2>React Developer </h2>
          <h3>IT Specialist </h3>

          <p>
            Hi, I'm Denis Mahmutovic. A passionate programmer from Sarajevo,
            Bosnia & Herzegowina.
          </p>

          <div className="techStack" color="primary">
            <p>Tech-Stack</p>

            <div className="skills">
              <ul>
                <li>
                  <img src="https://skillicons.dev/icons?i=html,css,javascript"></img>
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=java,rust,cpp"></img>
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=linux,neovim,powershell"></img>
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=react,vue,angular"></img>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 herodiv-picture"></div>
      </div>
    </div>
  );
}

export default hero;
