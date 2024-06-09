import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Grid, Box, Typography } from "@mui/material";

const Projects = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/items.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching the JSON file:", error));
  }, []);

  return (
    <div className="container">
      <div className="projectDiv">
        {items.map((item) => (
          <div key={item.id} className="projectItem">
            <div className="projectItemNameAndDesc">
              <h1 className="item-name">{item.name}</h1>
              <p className="item-description">{item.description}</p>
            </div>
            <img src={item.image} alt={item.name} className="item-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
