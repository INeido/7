/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import * as Mat from "@mui/material";
import * as Ico from "@mui/icons-material";
import * as Dic from "../helper/dic";
import * as Api from "../../logic/api";

export default function _(props) {
  const [pointFields] = React.useState(Dic.PointFieldsSimple);
  const [scores, setScores] = React.useState(Dic.ScoresDefault);
  const [pageLoading, setPageLoading] = React.useState(true);
  const [locked, setLocked] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [dialog, setDialog] = React.useState({});

  React.useEffect(() => {
    const interval = setInterval(() => {
      Api.getScores(props.gameid).then((res) => {
        if (pointFields !== res.data) {
          setScores(res.data);
        }
        setPageLoading(false);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClickOpen = () => {
    if (locked) {
      setDialog({
        title: "Open current game?",
        text: "Game will be opened for players to join.",
        proceed: openGameF,
      });
    } else {
      setDialog({
        title: "Close current game?",
        text: "This will close the game and kick current players.",
        proceed: closeGameF,
      });
    }
    if (true) {
      // props.admin
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const closeGameF = () => {
    Api.closeGame().then((res) => {
      console.log("game closed");
      setLocked(true);
      handleClose();
    });
  };

  const openGameF = () => {
    Api.openGame(props.gameid).then((res) => {
      console.log("game opened");
      setLocked(false);
      handleClose();
    });
  };

  return (
    <Mat.ThemeProvider theme={props.theme}>
      <Mat.CssBaseline />
      <Mat.Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Mat.DialogTitle id="alert-dialog-title">
          {dialog.title}
        </Mat.DialogTitle>
        <Mat.DialogContent>
          <Mat.DialogContentText id="alert-dialog-description">
            {dialog.text}
          </Mat.DialogContentText>
        </Mat.DialogContent>
        <Mat.DialogActions>
          <Mat.Button onClick={handleClose} color="primary">
            Abort
          </Mat.Button>
          <Mat.Button onClick={dialog.proceed} color="primary" autoFocus>
            Proceed
          </Mat.Button>
        </Mat.DialogActions>
      </Mat.Dialog>

      <Mat.Backdrop open={pageLoading}>
        <Mat.CircularProgress color="inherit" />
      </Mat.Backdrop>

      <Mat.TableContainer component={Mat.Paper}>
        <Mat.Table size="small">
          <Mat.TableBody>
            <Mat.TableRow>
              <Mat.TableCell variant="head">Player</Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell key={game.player_name.id}>
                  {game.player_name}
                </Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">Wonder</Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell key={game.wonder_name.id}>
                  {game.wonder_name}
                </Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">Mode</Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell key={game.wonder_mode.id}>
                  {game.wonder_mode}
                </Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {pointFields[0].label}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell key={game.sc_wonder.id}>
                  {game.sc_wonder}
                </Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {pointFields[1].label}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell key={game.sc_money.id}>
                  {game.sc_money}
                </Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {pointFields[2].label}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell key={game.sc_red.id}>
                  {game.sc_red}
                </Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {pointFields[3].label}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell key={game.sc_blue.id}>
                  {game.sc_blue}
                </Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {pointFields[4].label}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell key={game.sc_yellow.id}>
                  {game.sc_yellow}
                </Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {pointFields[5].label}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell key={game.sc_green.id}>
                  {game.sc_green}
                </Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {pointFields[6].label}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell key={game.sc_purple.id}>
                  {game.sc_purple}
                </Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {pointFields[7].label}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell key={game.sc_black.id}>
                  {game.sc_black}
                </Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {pointFields[8].label}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell key={game.sc_white.id}>
                  {game.sc_white}
                </Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {pointFields[9].label}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell key={game.sc_armada0.id}>
                  {game.sc_armada0}
                </Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {pointFields[10].label}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell key={game.sc_armada1.id}>
                  {game.sc_armada1}
                </Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">Sum</Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell key={game.sum.id}>{game.sum}</Mat.TableCell>
              ))}
            </Mat.TableRow>
          </Mat.TableBody>
        </Mat.Table>
      </Mat.TableContainer>

      <Mat.AppBar
        position="fixed"
        style={{
          top: "auto",
          bottom: 0,
        }}
      >
        <Mat.Toolbar>
          <Mat.IconButton color="inherit" onClick={props.backward}>
            <Ico.ArrowBack />
          </Mat.IconButton>
          <div style={{ flexGrow: 1 }} />
          <Mat.IconButton color="inherit" onClick={handleClickOpen}>
            {locked ? <Ico.LockOutlined /> : <Ico.LockOpenOutlined />}
          </Mat.IconButton>
        </Mat.Toolbar>
      </Mat.AppBar>
      <Mat.Toolbar />
    </Mat.ThemeProvider>
  );
}
