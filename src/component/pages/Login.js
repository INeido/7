import * as React from "react";
import * as Mat from "@mui/material";
import * as Lab from "@mui/lab";
import * as Ico from "@mui/icons-material";
import * as Dic from "../helper/dic";
import * as Api from "../../logic/api";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";

export default function _(props) {
  const [btnLoading, setBtnLoading] = React.useState(false);
  const [pageLoading, setPageLoading] = React.useState(true);
  const [btnText, setBtnText] = React.useState("");
  const [fieldDisabled, setFieldDisabled] = React.useState(false);
  const [newGame, setNewGame] = React.useState(false);
  const [gameID, setGameID] = React.useState();
  const [cookies, setCookie] = useCookies(["user"]);

  React.useEffect(() => {
    Api.isRunning().then((res) => {
      setNewGame(Boolean(res.data[0].locked));
      if (Boolean(res.data[0].locked)) {
        setBtnText("Create");
        console.log("No game found.");
      } else {
        setGameID(res.data[0].game_id);
        setBtnText("Join");
        console.log("Game found with ID: " + res.data[0].game_id);
      }
      setPageLoading(false);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setBtnLoading(true);
    setFieldDisabled(true);
    setCookie("name", data.playerName, { path: "/" });

    if (newGame) {
      // New game
      Api.createGame().then((res0) => {
        console.log("Game created. ID: " + res0.data.insertId);
        Api.createPlayer(res0.data.insertId, data.playerName).then((res1) => {
          console.log("Player created. ID: " + res1.data.insertId);
          props.line(
            res1.data.insertId, // PlayerID
            res0.data.insertId, // GameID
            data.playerName,
            Dic.DefaultValues,
            1 // Admin
          );
        });
      });
    } else {
      // Join one
      Api.isPlayer(gameID, data.playerName).then((res0) => {
        try {
          console.log("Player found with ID: " + res0.data[0].player_id);
          Api.getPlayer(res0.data[0].player_id).then((res1) => {
            console.log("Player found with name: " + data.playerName);
            props.line(
              res0.data[0].player_id,
              gameID,
              data.playerName,
              res1.data[0], // Scores
              Boolean(res1.data[0].admin)
            );
          });
        } catch {
          Api.createPlayer(gameID, data.playerName).then((res) => {
            console.log("Player created. ID: " + res.data.insertId);
            props.line(
              res.data.insertId, // PlayerID
              gameID,
              data.playerName,
              Dic.DefaultValues,
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Mat.Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "25vh" }}
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
                {...register("playerName", { required: true })}
                disabled={fieldDisabled}
                fullWidth
                autoFocus
                helperText={errors.playerName ? "Bitte Namen eingeben." : ""}
                margin="normal"
                name="playerName"
                label="Name"
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
