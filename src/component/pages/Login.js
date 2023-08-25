/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import * as Mat from "@mui/material";
import * as Lab from "@mui/lab";
import * as Ico from "@mui/icons-material";
import * as Dic from "../helper/dictionary";
import * as Api from "../../logic/api";
import * as Cookie from "react-cookie";
import * as Form from "react-hook-form";
import GameBrowser from "./subpages/GameBrowser";

export default function _(props) {
  const [cookies, setCookie] = Cookie.useCookies(["user"]);
  const [lang] = React.useState(
    cookies.lang !== undefined ? cookies.lang : "en"
  );
  const [gameID, setGameID] = React.useState(undefined);
  const [btnText, setBtnText] = React.useState(undefined);
  const [disableInputs, setDisableInputs] = React.useState(false);
  const [pageLoading, setPageLoading] = React.useState(true);
  const [newGame, setNewGame] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openDialogGameBrowser, setOpenDialogGameBrowser] =
    React.useState(false);
  const openMenu = Boolean(anchorEl);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = Form.useForm();

  /* Event Handler */
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleCloseDialogGameBrowser = () => {
    setOpenDialogGameBrowser(false);
  };

  /* Updates language cookie and reloads page */
  const changeLang = (data) => {
    setCookie("lang", data, { path: "/" });
    window.location.reload();
  };

  /* Catch Rerender */
  React.useEffect(() => {
    const interval = setInterval(() => {
      try {
        /* Is a game currently running? */
        Api.isRunning().then((res) => {
          /* Update State */
          setNewGame(Boolean(res.data[0].locked));
          if (Boolean(res.data[0].locked)) {
            /* No game running */
            setBtnText(Dic.String.button_login_create[lang]);
          } else {
            /* Game running. Update 'GameID' state */
            setBtnText(Dic.String.button_login_join[lang]);
            setGameID(res.data[0].game_id);
          }
          setPageLoading(false);
        });
      } catch {
        setPageLoading(true);
        /* Handle Error */
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const onSubmit = (data) => {
    setDisableInputs(true);
    setCookie("name", data.playerName, { path: "/" });

    if (newGame) {
      /* Create new game */
      Api.createGame().then((res0) => {
        /* Game has been created. Now create player. */
        Api.createPlayer(res0.data.insertId, data.playerName, 1).then(
          (res1) => {
            props.line(
              res1.data.insertId, // Player ID
              res0.data.insertId, // Game ID
              data.playerName, // Player Name
              Dic.DefaultScores, // Player Scores
              1 // Admin
            );
          }
        );
      });
    } else {
      /* Join running game */
      Api.isPlayer(gameID, data.playerName).then((res0) => {
        try {
          /* Player with name already registered to game */
          Api.getPlayer(res0.data[0].player_id).then((res1) => {
            if (res1.data[0].sum === null) {
              /* If scores empty, use default */
              props.line(
                res0.data[0].player_id, // Player ID
                gameID, // Game ID
                data.playerName, // Player Name
                Dic.DefaultScores, // Player Scores
                Boolean(res1.data[0].admin) // Admin
              );
            } else {
              /* Player has score registered */
              props.line(
                res0.data[0].player_id, // Player ID
                gameID, // Game ID
                data.playerName, // Player Name
                res1.data[0], // Player Scores
                Boolean(res1.data[0].admin) // Admin
              );
            }
          });
        } catch {
          /* There is no player yet in this game */
          Api.createPlayer(gameID, data.playerName, 0).then((res) => {
            props.line(
              res.data.insertId, // PlayerID
              gameID, // Game ID
              data.playerName, // Player Name
              Dic.DefaultScores, // Player Scores
              0 // Admin
            );
          });
        }
      });
    }
  };

  return (
    <Mat.ThemeProvider theme={props.theme}>
      <Mat.CssBaseline />
      {/* Icons */}
      {pageLoading ? (
        <></>
      ) : (
        <>
          <Mat.IconButton
            disabled={disableInputs}
            href="https://github.com/INeido/7"
            target="_blank"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
          >
            <Ico.GitHub></Ico.GitHub>
          </Mat.IconButton>
          <Mat.IconButton
            onClick={handleOpenMenu}
            sx={{ position: "absolute", top: 16, left: 16 }}
          >
            <Ico.Menu></Ico.Menu>
          </Mat.IconButton>
        </>
      )}

      {/* Menu */}
      <Mat.Menu anchorEl={anchorEl} open={openMenu} onClose={handleCloseMenu}>
        <Mat.MenuItem
          onClick={() => {
            handleCloseMenu();
            setOpenDialogGameBrowser(true);
          }}
        >
          {Dic.String.menu_login_browser[lang]}
        </Mat.MenuItem>
        <Mat.MenuItem
          onClick={() => {
            handleCloseMenu();
            setOpenDialog(true);
          }}
        >
          {Dic.String.menu_login_stats[lang]}
        </Mat.MenuItem>
        <Mat.MenuItem
          onClick={() => {
            handleCloseMenu();
            setOpenDialog(true);
          }}
        >
          {Dic.String.lang_language[lang]}
        </Mat.MenuItem>
      </Mat.Menu>

      {/* Game Browser Dialog */}
      <Mat.Dialog
        fullScreen
        onClose={handleCloseDialogGameBrowser}
        open={openDialogGameBrowser}
      >
        <Mat.AppBar sx={{ position: "relative" }}>
          <Mat.Toolbar>
            <Mat.IconButton
              color="inherit"
              onClick={handleCloseDialogGameBrowser}
            >
              <Ico.Close />
            </Mat.IconButton>
            <Mat.Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div"
            >
              {Dic.String.browse_title[lang]}
            </Mat.Typography>
          </Mat.Toolbar>
        </Mat.AppBar>
        <GameBrowser theme={props.theme} view={props.view}></GameBrowser>
      </Mat.Dialog>

      {/* Language Dialog */}
      <Mat.Dialog onClose={handleCloseDialog} open={openDialog}>
        <Mat.DialogTitle>{Dic.String.lang_change_lang[lang]}</Mat.DialogTitle>
        <Mat.List sx={{ pt: 0 }}>
          <Mat.ListItem
            button
            onClick={() => {
              changeLang("en");
              handleCloseDialog();
            }}
          >
            <Mat.ListItemText>{Dic.String.lang_english[lang]}</Mat.ListItemText>
          </Mat.ListItem>
          <Mat.ListItem
            button
            onClick={() => {
              changeLang("de");
              handleCloseDialog();
            }}
          >
            <Mat.ListItemText>{Dic.String.lang_german[lang]}</Mat.ListItemText>
          </Mat.ListItem>
          <Mat.ListItem
            button
            onClick={() => {
              changeLang("hu");
              handleCloseDialog();
            }}
          >
            <Mat.ListItemText>
              {Dic.String.lang_hungarian[lang]}
            </Mat.ListItemText>
          </Mat.ListItem>
          <Mat.ListItem
            button
            onClick={() => {
              changeLang("ru");
              handleCloseDialog();
            }}
          >
            <Mat.ListItemText>{Dic.String.lang_russian[lang]}</Mat.ListItemText>
          </Mat.ListItem>
          <Mat.ListItem
            button
            onClick={() => {
              changeLang("es");
              handleCloseDialog();
            }}
          >
            <Mat.ListItemText>{Dic.String.lang_spanish[lang]}</Mat.ListItemText>
          </Mat.ListItem>
        </Mat.List>
      </Mat.Dialog>

      {/* Login Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Mat.Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "120px" }}
        >
          {pageLoading ? (
            <Mat.Skeleton variant="rectangular" width={210} height={118} />
          ) : (
            <Mat.Paper
              variant="outlined"
              sx={{ mt: 1, px: 2, py: 2, maxWidth: 300 }}
            >
              <Mat.TextField
                error={errors.playerName ? true : false}
                {...register("playerName", {
                  required: Dic.String.warning_login_empty[lang],
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: Dic.String.warning_login_chars[lang],
                  },
                })}
                helperText={errors.playerName?.message}
                disabled={disableInputs}
                fullWidth
                autoFocus
                margin="normal"
                name="playerName"
                label={Dic.String.label_login_name[lang]}
                type="text"
                id="playerName"
                variant="standard"
                color="primary"
                defaultValue={cookies.name}
                InputProps={{
                  startAdornment: (
                    <Mat.InputAdornment position="start">
                      <Ico.AccountCircle />
                    </Mat.InputAdornment>
                  ),
                }}
              />
              <Lab.LoadingButton
                loading={disableInputs}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
              >
                {btnText}
              </Lab.LoadingButton>
            </Mat.Paper>
          )}
        </Mat.Grid>
      </form>
    </Mat.ThemeProvider>
  );
}
