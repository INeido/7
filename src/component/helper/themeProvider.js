import { createTheme, useMediaQuery } from "@mui/material";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  if (prefersDarkMode === true) {
    return createTheme({
      palette: {
        primary: {
          light: "#4eba3c",
          main: "#008900",
          dark: "#005a00",
          contrastText: "#fff",
        },
        background: {
          default: "#fff",
          paper: "#fff",
        },
        text: {
          primary: "#000",
          secondary: "#000",
        },
      },
    });
  } else {
    return createTheme({
      palette: {
        primary: {
          light: "#4eba3c",
          main: "#008900",
          dark: "#005a00",
          contrastText: "#fff",
        },
        background: {
          default: "#fff",
          paper: "#fff",
        },
        text: {
          primary: "#000",
          secondary: "#000",
        },
      },
    });
  }
}
