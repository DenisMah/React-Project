import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./AboutMe.css";
import { Grid, Box, Typography } from "@mui/material";
import "./AboutMe.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
  return (
    <Box className="aboutMe" sx={{ flexGrow: 1, marginTop: 37 }}>
      <Grid container spacing={1} justifyContent="center">
        <Grid
          item
          xs={12}
          md={4}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Box className="aboutMePicture">
            <img
              src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="About Me"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} mt={0}>
          <Box className="aboutMeText" justifyContent="center">
            <Typography variant="h5" mt={3}>
              About Me
            </Typography>
            <Typography variant="h4" mt={3}>
              Professional software engineer based in Sarajevo, Bosnia &
              Herzegovina
              <FontAwesomeIcon
                icon={faLocationDot}
                size="1x"
                className="locationicon"
              />
            </Typography>
            <Typography variant="body1" mt={1} color={"red"}>
              Hey! I'm Dennis, a passionate software engineer from Bosnia &
              Herzegovina. <br></br>My passion's creating applications &
              creating clean-looking React Websites. I'm a highly motivated &
              disciplined individual looking for work!
            </Typography>
            <Box className="aboutMeSocials" mt={3}>
              <Box className="facebook">
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  size="5x"
                  className="aboutmeicon"
                />
              </Box>
              <Box className="facebook">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="5x"
                  className="aboutmeicon"
                />
              </Box>
              <Box className="facebook">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="5x"
                  className="aboutmeicon"
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutMe;
