/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import * as Mat from "@mui/material";
import * as Ico from "@mui/icons-material";
import * as Dic from "../helper/dictionary";
import * as Api from "../../logic/api";
import * as Form from "react-hook-form";
import * as Cookie from "react-cookie";
import GreenCalc from "./subpages/GreenCalc";

export default function _(props) {
  const [cookies] = Cookie.useCookies(["user"]);
  const [lang] = React.useState(
    cookies.lang !== undefined ? cookies.lang : "en"
  );
  const [players, setPlayers] = React.useState([{}]);
  const [fieldDisabled, setFieldDisabled] = React.useState(false);
  const [openDialogPlayers, setOpenDialogPlayers] = React.useState(false);
  const [openDialogGreenCalc, setOpenDialogGreenCalc] = React.useState(false);
  const [openDialogGameClosed, setOpenDialogGameClosed] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(false);
  const openMenu = Boolean(anchorEl);
  const inputRef = React.useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = Form.useForm({ defaultValues: props.playerscores });

  /* Event Handler */
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleOpenDialogPlayers = () => {
    Api.getPlayers(props.gameid).then((res) => {
      setPlayers(res.data);
      setOpenDialogPlayers(true);
    });
  };
  const handleCloseDialogGreenCalc = () => {
    setOpenDialogGreenCalc(false);
  };
  const handleOpenDialogGreenCalc = () => {
    setOpenDialogGreenCalc(true);
  };
  const handleCloseDialogPlayers = () => {
    setOpenDialogPlayers(false);
  };
  const handleCloseDialogGameClosed = () => {
    setOpenDialogGameClosed(false);
    props.backward();
  };

  /* Fires when page is correctly submitted */
  const onSubmit = (data) => {
    setFieldDisabled(true);
    updatePlayerObject(data).then((res) => {
      props.forward(data);
    });
  };

  /* Array of Button Properties (can be done better) */
  const fields = [
    {
      label: Dic.String.label_wonder[lang],
      name: "wonder",
      icon: <Ico.Eject sx={{ color: "#e08a08" }} />,
    },
    {
      label: Dic.String.label_money[lang],
      name: "money",
      icon: <Ico.Paid sx={{ color: "#d8cb0a" }} />,
    },
    {
      label: Dic.String.label_red[lang],
      name: "red",
      icon: <Ico.Report sx={{ color: "#B80000" }} />,
    },
    {
      label: Dic.String.label_blue[lang],
      name: "blue",
      icon: <Ico.AccountBalance sx={{ color: "#0693E3" }} />,
    },
    {
      label: Dic.String.label_yellow[lang],
      name: "yellow",
      icon: <Ico.Circle sx={{ color: "#fcce00" }} />,
    },
    {
      label: Dic.String.label_green[lang],
      name: "green",
      icon: <Ico.ChangeHistory sx={{ color: "#008B02" }} />,
    },
    {
      label: Dic.String.label_purple[lang],
      name: "purple",
      icon: <Ico.StarOutline sx={{ color: "#4A148C" }} />,
    },
    {
      label: Dic.String.label_black[lang],
      name: "black",
      icon: <Ico.Details sx={{ color: "#767676" }} />,
    },
    {
      label: Dic.String.label_white[lang],
      name: "white",
      icon: <Ico.Accessibility sx={{ color: "#b0b6c1" }} />,
    },
    {
      label: Dic.String.label_armada0[lang],
      name: "armada0",
      icon: <Ico.Sailing sx={{ color: "#0a50d3" }} />,
    },
    {
      label: Dic.String.label_armada1[lang],
      name: "armada1",
      icon: <Ico.Waves sx={{ color: "#26b6ef" }} />,
    },
  ];

  /* Catch Rerender */
  React.useEffect(() => {
    const interval = setInterval(() => {
      try {
        Api.isRunningID(props.gameid).then((res) => {
          if (res.data[0].locked === 1) {
            setOpenDialogGameClosed(true);
          }
        });
      } catch {
        // Handle Error
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  /* Textfield component */
  const ScoreField = React.forwardRef((props, ref) => {
    return (
      <Mat.TextField
        ref={ref}
        {...props}
        type="number"
        color="primary"
        InputProps={{
          inputProps: { min: -99, max: 256 }, // Turns out you can achieve more than 99. Thanks, Paul.
          startAdornment: (
            <Mat.InputAdornment position="start">
              {props.startadornment}
            </Mat.InputAdornment>
          ),
        }}
      />
    );
  });

  /* Calculates sum of scores (can be done better) */
  const updatePlayerObject = (data) => {
    var sum = 0;
    // eslint-disable-next-line array-callback-return
    Object.keys(data).map((key, index) => {
      if (
        key !== "sum" &&
        key !== "player_name" &&
        key !== "wonder_name" &&
        key !== "wonder_mode" &&
        key !== "player_id" &&
        key !== "game_id" &&
        key !== "admin"
      )
        sum += parseInt(data[key]);
    }, {});
    var tempObject = data;
    tempObject.player_name = props.playername;
    tempObject.player_id = props.playerid;
    tempObject.sum = sum;
    return Api.updatePlayer(tempObject);
  };

  return (
   <Mat.ThemeProvider theme={props.theme}>
      <Mat.CssBaseline />

      {/* Green Calculator */}
      <Mat.Dialog
        onClose={handleCloseDialogGreenCalc}
        open={openDialogGreenCalc}
      >
        <Mat.DialogTitle>{Dic.String.menu_green_calc[lang]}</Mat.DialogTitle>
        <GreenCalc theme={props.theme}></GreenCalc>
      </Mat.Dialog>

      {/* Select Form */}
      <form key={1} onSubmit={handleSubmit(onSubmit)}>
        <Mat.Box
          sx={{
            marginTop: 2,
            display: "grid",
            gap: 1.5,
            px: 2,
            py: 2,
          }}
        >
          <Mat.Box
            sx={{
              display: "grid",
              gap: 1.5,
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            <Mat.TextField
              error={errors.wonder_name ? true : false}
              {...register("wonder_name", { required: true })}
              disabled={fieldDisabled}
              defaultValue={props.playerscores.wonder_name}
              name="wonder_name"
              select
              color="primary"
              label={Dic.String.label_wonder_select[lang]}
              variant="outlined"
            >
              {Dic.String.select_wonders[lang].map((choice) => (
                <Mat.MenuItem key={choice.val} value={choice.val}>
                  {choice.label}
                </Mat.MenuItem>
              ))}
            </Mat.TextField>

            <Mat.TextField
              error={errors.wonder_mode ? true : false}
              {...register("wonder_mode", { required: true })}
              disabled={fieldDisabled}
              defaultValue={props.playerscores.wonder_mode}
              name="wonder_mode"
              select
              color="primary"
              label={Dic.String.label_wonder_mode[lang]}
            >
              {Dic.String.select_modes[lang].map((choice) => (
                <Mat.MenuItem key={choice.val} value={choice.val}>
                  {choice.label}
                </Mat.MenuItem>
              ))}
            </Mat.TextField>
          </Mat.Box>
          <Mat.Paper variant="outlined">
            <Mat.Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                px: 2,
                py: 2,
                paddingBottom: "1px",
              }}
            >
              <Mat.Typography variant="h5">
                {Dic.String.label_select[lang]}
              </Mat.Typography>
            </Mat.Box>
            <Mat.Box
              sx={{
                display: "grid",
                gap: 1.5,
                gridTemplateColumns: "repeat(2, 1fr)",
                px: 2,
                py: 2,
              }}
            >
              {fields.map((field) => (
                <ScoreField
                  key={field.id}
                  ref={inputRef}
                  disabled={fieldDisabled}
                  label={field.label}
                  startadornment={field.icon}
                  error={errors[field.name] ? true : false}
                  {...register(field.name, { required: true })}
                />
              ))}
            </Mat.Box>
          </Mat.Paper>
        </Mat.Box>

        {/* Game Closed */}
        <Mat.Dialog
          onClose={handleCloseDialogGameClosed}
          open={openDialogGameClosed}
        >
          <Mat.DialogTitle>
            {Dic.String.warning_game_closed_title[lang]}
          </Mat.DialogTitle>
          <Mat.DialogContent>
            <Mat.DialogContentText>
              {Dic.String.warning_game_closed_message[lang]}
            </Mat.DialogContentText>
          </Mat.DialogContent>
          <Mat.DialogActions>
            <Mat.Button
              onClick={handleCloseDialogGameClosed}
              color="primary"
              autoFocus
            >
              {Dic.String.button_okey[lang]}
            </Mat.Button>
          </Mat.DialogActions>
        </Mat.Dialog>

        {/* Players */}
        <Mat.Dialog onClose={handleCloseDialogPlayers} open={openDialogPlayers}>
          <Mat.DialogTitle>
            <Mat.Typography variant="h6" align="center">
              {Dic.String.menu_players_ingame[lang]}
            </Mat.Typography>
          </Mat.DialogTitle>
          <Mat.DialogContent>
            <Mat.List>
              {players.map((player) => (
                <React.Fragment key={player.player_name}>
                  <Mat.ListItem>
                    <Mat.ListItemText>
                      {player.admin === 1 ? (
                        <span role="img" aria-label="Admin">
                          👑
                        </span>
                      ) : (
                        <span role="img" aria-label="Player">
                          
                        </span>
                      )}
                      {` ${player.player_name}`}
                    </Mat.ListItemText>
                  </Mat.ListItem>
                  <Mat.Divider variant="middle" />
                </React.Fragment>
              ))}
            </Mat.List>
          </Mat.DialogContent>
        </Mat.Dialog>

        {/* Menu */}
        <Mat.Menu anchorEl={anchorEl} open={openMenu} onClose={handleCloseMenu}>
          <Mat.MenuItem
            onClick={() => {
              handleCloseMenu();
              handleOpenDialogGreenCalc();
            }}
          >
            {Dic.String.menu_green_calc[lang]}
          </Mat.MenuItem>
          <Mat.MenuItem
            onClick={() => {
              handleCloseMenu();
              handleOpenDialogPlayers();
            }}
          >
            {Dic.String.menu_players_ingame[lang]}
          </Mat.MenuItem>
        </Mat.Menu>

        {/* App Bar */}
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
            <Mat.IconButton color="inherit" onClick={handleOpenMenu}>
              <Ico.Menu />
            </Mat.IconButton>
            <div style={{ flexGrow: 1 }} />
            <Mat.IconButton color="inherit" type="submit">
              <Ico.ArrowForward />
            </Mat.IconButton>
          </Mat.Toolbar>
        </Mat.AppBar>
        <Mat.Toolbar />
      </form>
    </Mat.ThemeProvider>
  );
}
