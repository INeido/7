/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import * as Mat from "@mui/material";
import * as Ico from "@mui/icons-material";
import * as Dic from "../helper/dictionary";
import * as Api from "../../logic/api";
import * as Cookie from "react-cookie";

export default function _(props) {
  const [cookies] = Cookie.useCookies(["user"]);
  const [lang] = React.useState(
    cookies.lang !== undefined ? cookies.lang : "en"
  );
  const [lockLocked] = React.useState(
    props.admin === undefined || !props.admin
  );
  const [scores, setScores] = React.useState([Dic.DefaultScores]);
  const [dialog, setDialog] = React.useState({});
  const [pageLoading, setPageLoading] = React.useState(true);
  const [locked, setLocked] = React.useState(false);
  const [arrowDisabled, setArrowDisabled] = React.useState(false);
  const [openLockDialog, setOpenLockDialog] = React.useState(false);

  /* Event Handler */
  const handleClickOpenLockDialog = () => {
    if (locked) {
      /* Update Dialog to "Open Game" */
      setDialog({
        title: Dic.String.unlock_title[lang],
        text: Dic.String.unlock_message[lang],
        proceed: openGameF,
      });
    } else {
      /* Update Dialog to "Close Game" */
      setDialog({
        title: Dic.String.lock_title[lang],
        text: Dic.String.lock_message[lang],
        proceed: closeGameF,
      });
    }
    /* Open Dialog */
    setOpenLockDialog(true);
  };
  const handleCloseDialog = (event) => {
    setOpenLockDialog(false);
  };

  /* Catch Rerender */
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

  /* Close/Open current game */
  const closeGameF = () => {
    Api.closeGame(props.gameid).then((res) => {
      setLocked(true);
      Api.tidyGame(props.gameid).then((res) => {});
      handleCloseDialog();
    });
  };

  const openGameF = () => {
    Api.openGame(props.gameid).then((res) => {
      setLocked(false);
      handleCloseDialog();
    });
  };

  /* Catch Rerender */
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

  return (
    <Mat.ThemeProvider theme={props.theme}>
      <Mat.CssBaseline />

      {/* Dialog */}
      <Mat.Dialog open={openLockDialog} onClose={handleCloseDialog}>
        <Mat.DialogTitle>{dialog.title}</Mat.DialogTitle>
        <Mat.DialogContent>
          <Mat.DialogContentText>{dialog.text}</Mat.DialogContentText>
        </Mat.DialogContent>
        <Mat.DialogActions>
          <Mat.Button onClick={handleCloseDialog} color="primary">
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
          <Mat.IconButton
            color="inherit"
            onClick={handleClickOpenLockDialog}
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
