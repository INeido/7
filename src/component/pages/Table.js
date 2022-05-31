import { Paper, ThemeProvider, CssBaseline } from "@mui/material";

export default function Table(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />
      <Paper>
        <p>test</p>
      </Paper>
    </ThemeProvider>
  );
}
