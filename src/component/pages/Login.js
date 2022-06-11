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
  const [btnLoading, setBtnLoading] = React.useState(false);
  const [pageLoading, setPageLoading] = React.useState(true);
  const [btnText, setBtnText] = React.useState("");
  const [fieldDisabled, setFieldDisabled] = React.useState(false);
  const [newGame, setNewGame] = React.useState(false);
  const [gameID, setGameID] = React.useState();
  const [cookies, setCookie] = Cookie.useCookies(["user"]);
  const [lang] = React.useState(cookies.lang !== null ? cookies.lang : "en");
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openDialogGameBrowser, setOpenDialogGameBrowser] =
    React.useState(false);
  const openMenu = Boolean(anchorEl);
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
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

  function changeLang(data) {
    setCookie("lang", data, { path: "/" });
    window.location.reload();
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      try {
        Api.isRunning().then((res) => {
          setNewGame(Boolean(res.data[0].locked));
          if (Boolean(res.data[0].locked)) {
            setBtnText(Dic.String.button_login_create[lang]);
          } else {
            setGameID(res.data[0].game_id);
            setBtnText(Dic.String.button_login_join[lang]);
          }
          setPageLoading(false);
        });
      } catch {
        setPageLoading(true);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = Form.useForm();

  const onSubmit = (data) => {
    setBtnLoading(true);
    setFieldDisabled(true);
    setCookie("name", data.playerName, { path: "/" });

    if (newGame) {
      // New game
      Api.createGame().then((res0) => {
        console.log("Game created. ID: " + res0.data.insertId);
        Api.createPlayer(res0.data.insertId, data.playerName, 1).then(
          (res1) => {
            console.log("Player created. ID: " + res1.data.insertId);
            props.line(
              res1.data.insertId, // PlayerID
              res0.data.insertId, // GameID
              data.playerName,
              Dic.DefaultScores,
              1 // Admin
            );
          }
        );
      });
    } else {
      // Join one
      Api.isPlayer(gameID, data.playerName).then((res0) => {
        try {
          console.log("Player found with ID: " + res0.data[0].player_id);
          Api.getPlayer(res0.data[0].player_id).then((res1) => {
            console.log("Player found with name: " + data.playerName);
            if (res1.data[0].sum === null) {
              props.line(
                res0.data[0].player_id,
                gameID,
                data.playerName,
                Dic.DefaultScores,
                Boolean(res1.data[0].admin)
              );
            } else {
              props.line(
                res0.data[0].player_id,
                gameID,
                data.playerName,
                res1.data[0], // Scores
                Boolean(res1.data[0].admin)
              );
            }
          });
        } catch {
          Api.createPlayer(gameID, data.playerName, 0).then((res) => {
            console.log("Player created. ID: " + res.data.insertId);
            props.line(
              res.data.insertId, // PlayerID
              gameID,
              data.playerName,
              Dic.DefaultScores,
              0
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
      <Mat.IconButton
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
        <Mat.MenuItem onClick={handleCloseMenu}>
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
              changeLang("sp");
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
                disabled={fieldDisabled}
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
                loading={btnLoading}
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
