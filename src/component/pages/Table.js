import {
  Paper,
  ThemeProvider,
  CssBaseline,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  Fab,
  MobileStepper,
} from "@mui/material";
import ArrowBackwardIcon from "@mui/icons-material/ArrowBack";

export default function _(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />

      <Fab
        type="submit"
        color="primary"
        sx={{ position: "absolute", bottom: 16, left: 16 }}
      >
        <ArrowBackwardIcon />
      </Fab>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell variant="head">Spieler</TableCell>
              <TableCell>Krisz</TableCell>
              <TableCell>Paul</TableCell>
              <TableCell>Lena</TableCell>
              <TableCell>Flo</TableCell>
              <TableCell>Julian</TableCell>
              <TableCell>Schwabenhuber</TableCell>
              <TableCell>El</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Punkte0</TableCell>
              <TableCell>1</TableCell>
              <TableCell>2</TableCell>
              <TableCell>3</TableCell>
              <TableCell>4</TableCell>
              <TableCell>5</TableCell>
              <TableCell>6</TableCell>
              <TableCell>7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Punkte1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>2</TableCell>
              <TableCell>3</TableCell>
              <TableCell>4</TableCell>
              <TableCell>5</TableCell>
              <TableCell>6</TableCell>
              <TableCell>7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Punkte2</TableCell>
              <TableCell>1</TableCell>
              <TableCell>2</TableCell>
              <TableCell>3</TableCell>
              <TableCell>4</TableCell>
              <TableCell>5</TableCell>
              <TableCell>6</TableCell>
              <TableCell>7</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <MobileStepper
        variant="dots"
        steps={2}
        position="static"
        activeStep={1}
        sx={{
          maxWidth: 400,
          flexGrow: 1,
          position: "absolute",
          bottom: 16,
          right: "50%",
        }}
      />
    </ThemeProvider>
  );
}
