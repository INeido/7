/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import * as Mat from "@mui/material";
import * as Ico from "@mui/icons-material";
import * as Dic from "../helper/dictionary";
import * as Api from "../../logic/api";
import * as Cookie from "react-cookie";

export default function _(props) {
  const [scores, setScores] = React.useState([Dic.DefaultScores]);
  const [pageLoading, setPageLoading] = React.useState(true);
  const [locked, setLocked] = React.useState(false);
  const [lockLocked] = React.useState(
    props.Admin === undefined || !props.admin
  );
  const [arrowDisabled, setArrowDisabled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [dialog, setDialog] = React.useState({});
  const [cookies] = Cookie.useCookies(["user"]);
  const [lang] = React.useState(cookies.lang !== null ? cookies.lang : "en");
  const [anchorEl, setAnchorEl] = React.useState(false);
  const openMenu = Boolean(anchorEl);
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

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

  React.useEffect(() => {
    const interval = setInterval(() => {
      try {
        Api.isRunningID(props.gameid).then((res) => {
          if (res.data[0].locked === 1 || props.viewer) {
            setArrowDisabled(true);
          } else {
            setArrowDisabled(false);
          }
          if (res.data[0].locked === 1) {
            setLocked(true);
          }
        });
      } catch {
        // Handle Error
      }
    }, 100);
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

      {/* Dialog */}
      <Mat.Dialog open={open} onClose={handleClose}>
        <Mat.DialogTitle>{dialog.title}</Mat.DialogTitle>
        <Mat.DialogContent>
          <Mat.DialogContentText>{dialog.text}</Mat.DialogContentText>
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

      {/* Backdrop */}
      <Mat.Backdrop open={pageLoading}>
        <Mat.CircularProgress color="inherit" />
      </Mat.Backdrop>

      {/* Table */}
      <Mat.TableContainer component={Mat.Paper}>
        <Mat.Table size="small">
          <Mat.TableBody>
            <Mat.TableRow>
              <Mat.TableCell variant="head">
                {Dic.String.label_table_player[lang]}
              </Mat.TableCell>
              {scores.map((game) => (
                <Mat.TableCell>
                  {game.admin === 1 ? "\u2654" : ""} {game.player_name}
                </Mat.TableCell>
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

      {/* App Bar */}
      <Mat.AppBar
        position="fixed"
        style={{
          top: "auto",
          bottom: 0,
        }}
      >
        <Mat.Toolbar>
          {arrowDisabled ? (
            <Mat.IconButton color="inherit" onClick={props.firstpage}>
              <Ico.Home />
            </Mat.IconButton>
          ) : (
            <Mat.IconButton color="inherit" onClick={props.backward}>
              <Ico.ArrowBack />
            </Mat.IconButton>
          )}
          <div style={{ flexGrow: 1 }} />

          <Mat.IconButton color="inherit" onClick={handleOpenMenu}>
            <Ico.Menu />
          </Mat.IconButton>

          <div style={{ flexGrow: 1 }} />
          <Mat.IconButton
            color="inherit"
            onClick={handleClickOpen}
            disabled={lockLocked}
          >
            {locked ? <Ico.LockOutlined /> : <Ico.LockOpenOutlined />}
          </Mat.IconButton>
        </Mat.Toolbar>
      </Mat.AppBar>
      <Mat.Toolbar />
    </Mat.ThemeProvider>
  );
}
