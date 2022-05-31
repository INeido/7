import { Paper, ThemeProvider } from "@mui/material";

export default function Table(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <Paper>
        <p>test</p>
      </Paper>
    </ThemeProvider>
  );
}
