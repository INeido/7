/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import * as Mat from "@mui/material";
import * as Ico from "@mui/icons-material";
import * as Dic from "../helper/dictionary";
import * as Api from "../../logic/api";
import * as Cookie from "react-cookie";

export default function _(props) {
  const [scores, setScores] = React.useState([Dic.DefaultValues]);
  const [pageLoading, setPageLoading] = React.useState(true);
  const [locked, setLocked] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [dialog, setDialog] = React.useState({});
  const [cookies] = Cookie.useCookies(["user"]);
  const [lang] = React.useState(cookies.lang !== null ? cookies.lang : "en");

  React.useEffect(() => {
    const interval = setInterval(() => {
      try {
        Api.getScores(props.gameid).then((res) => {
          if (scores !== res.data) {
            setScores(res.data);
          }
          setPageLoading(false);
        });
      } catch {
        // Handle Error
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClickOpen = () => {
    if (locked) {
      setDialog({
        title: Dic.String.unlock_title[lang],
        text: Dic.String.unlock_message[lang],
        proceed: openGameF,
      });
    } else {
      setDialog({
        title: Dic.String.lock_title[lang],
        text: Dic.String.lock_message[lang],
        proceed: closeGameF,
      });
    }
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const closeGameF = () => {
    Api.closeGame(props.gameid).then((res) => {
      console.log("game closed");
      setLocked(true);
      Api.tidyGame(props.gameid).then((res) => {});
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
            {Dic.String.button_abort[lang]}
          </Mat.Button>
          <Mat.Button onClick={dialog.proceed} color="primary" autoFocus>
            {Dic.String.button_proceed[lang]}
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
              <Mat.TableCell variant="head">
                {Dic.String.label_table_player[lang]}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell>{game.player_name}</Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {Dic.String.label_table_wonder[lang]}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell>{game.wonder_name}</Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {Dic.String.label_table_mode[lang]}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell>{game.wonder_mode}</Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {Dic.String.label_wonder[lang]}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell>{game.wonder}</Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {Dic.String.label_money[lang]}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell>{game.money}</Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {Dic.String.label_red[lang]}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell>{game.red}</Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {Dic.String.label_blue[lang]}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell>{game.blue}</Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {Dic.String.label_yellow[lang]}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell>{game.yellow}</Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {Dic.String.label_green[lang]}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell>{game.green}</Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {Dic.String.label_purple[lang]}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell>{game.purple}</Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {Dic.String.label_black[lang]}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell>{game.black}</Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {Dic.String.label_white[lang]}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell>{game.white}</Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {Dic.String.label_armada0[lang]}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell>{game.armada0}</Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {Dic.String.label_armada1[lang]}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell>{game.armada1}</Mat.TableCell>
              ))}
            </Mat.TableRow>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {Dic.String.label_sum[lang]}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell>{game.sum}</Mat.TableCell>
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
          <Mat.IconButton color="inherit">
            <Ico.Menu />
          </Mat.IconButton>
          <div style={{ flexGrow: 1 }} />
          <Mat.IconButton
            color="inherit"
            onClick={handleClickOpen}
            disabled={!props.admin}
          >
            {locked ? <Ico.LockOutlined /> : <Ico.LockOpenOutlined />}
          </Mat.IconButton>
        </Mat.Toolbar>
      </Mat.AppBar>
      <Mat.Toolbar />
    </Mat.ThemeProvider>
  );
}
