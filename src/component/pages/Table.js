/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import dic from "../helper/dic";
import { getScores } from "../../logic/api";
import {
  Paper,
  ThemeProvider,
  CssBaseline,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  Grid,
  Fab,
  MobileStepper,
} from "@mui/material";
import ArrowBackwardIcon from "@mui/icons-material/ArrowBack";

export default function _(props) {
  const [pointFields, setPointFields] = React.useState(dic.PointFieldsSimple);

  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />

      <Fab
        type="submit"
        color="primary"
        onClick={props.backward}
        sx={{ position: "absolute", bottom: 16, left: 16 }}
      >
        <ArrowBackwardIcon />
      </Fab>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell variant="head">Player</TableCell>
              {props.scores.map((game) => (
                <TableCell key={game.player_name.id}>
                  {game.player_name}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell variant="head">Wonder</TableCell>
              {props.scores.map((game) => (
                <TableCell key={game.wonder_name.id}>
                  {game.wonder_name}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell variant="head">Mode</TableCell>
              {props.scores.map((game) => (
                <TableCell key={game.wonder_mode.id}>
                  {game.wonder_mode}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell variant="head">{pointFields[0].label}</TableCell>
              {props.scores.map((game) => (
                <TableCell key={game.sc_wonder.id}>{game.sc_wonder}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell variant="head">{pointFields[1].label}</TableCell>
              {props.scores.map((game) => (
                <TableCell key={game.sc_money.id}>{game.sc_money}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell variant="head">{pointFields[2].label}</TableCell>
              {props.scores.map((game) => (
                <TableCell key={game.sc_red.id}>{game.sc_red}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell variant="head">{pointFields[3].label}</TableCell>
              {props.scores.map((game) => (
                <TableCell key={game.sc_blue.id}>{game.sc_blue}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell variant="head">{pointFields[4].label}</TableCell>
              {props.scores.map((game) => (
                <TableCell key={game.sc_yellow.id}>{game.sc_yellow}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell variant="head">{pointFields[5].label}</TableCell>
              {props.scores.map((game) => (
                <TableCell key={game.sc_green.id}>{game.sc_green}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell variant="head">{pointFields[6].label}</TableCell>
              {props.scores.map((game) => (
                <TableCell key={game.sc_purple.id}>{game.sc_purple}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell variant="head">{pointFields[7].label}</TableCell>
              {props.scores.map((game) => (
                <TableCell key={game.sc_black.id}>{game.sc_black}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell variant="head">{pointFields[8].label}</TableCell>
              {props.scores.map((game) => (
                <TableCell key={game.sc_white.id}>{game.sc_white}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell variant="head">{pointFields[9].label}</TableCell>
              {props.scores.map((game) => (
                <TableCell key={game.sc_armada0.id}>
                  {game.sc_armada0}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell variant="head">{pointFields[10].label}</TableCell>
              {props.scores.map((game) => (
                <TableCell key={game.sc_armada1.id}>
                  {game.sc_armada1}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell variant="head">Sum</TableCell>
              {props.scores.map((game) => (
                <TableCell key={game.sum.id}>{game.sum}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        sx={{ position: "absolute", bottom: 10 }}
      >
        <MobileStepper
          variant="dots"
          steps={2}
          activeStep={1}
          position="static"
        />
      </Grid>
    </ThemeProvider>
  );
}
