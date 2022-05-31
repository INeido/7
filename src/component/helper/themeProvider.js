import { createTheme, useMediaQuery } from "@mui/material";

export default function App() {
  const dark = useMediaQuery("(prefers-color-scheme: dark)");

  return createTheme({
    palette: {
      dark,
      ...(dark
        ? {
            mode: "dark",
            primary: {
              light: "#4eba3c",
              main: "#008900",
              dark: "#005a00",
              contrastText: "#fff",
            },
            background: {
              default: "#121212",
              paper: "#121212",
            },
            text: {
              primary: "#fff",
              secondary: "rgba(255, 255, 255, 0.7)",
              disabled: "rgba(255, 255, 255, 0.5)",
            },
          }
        : {
            mode: "light",
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
              primary: "rgba(0, 0, 0, 0.87)",
              secondary: "rgba(0, 0, 0, 0.6)",
              disabled: "rgba(0, 0, 0, 0.38)",
            },
          }),
    },
  });
}
