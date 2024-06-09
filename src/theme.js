import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#000000",
    },
    red: {
      main: "#373773",
    },
  },

  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      color: "#000000",
    },
    h5: {
      fontFamily: "Roboto",
      fontWeight: "100",
      color: "#00000",
    },
  },
});

export default theme;
