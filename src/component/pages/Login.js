import * as React from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import {
  TextField,
  Grid,
  Paper,
  ThemeProvider,
  InputAdornment,
  CssBaseline,
  Skeleton,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { createGame, isRunning } from "../../logic/api";

export default function _(props) {
  const [btnLoading, setBtnLoading] = React.useState(false);
  const [btnText, setBtnText] = React.useState("Join");
  const [fieldDisabled, setFieldDisabled] = React.useState(false);
  const [pageLoading, setPageLoading] = React.useState(true);
  const [newGame, setNewGame] = React.useState(false);
  const [gameID, setGameID] = React.useState(0);
  const [cookies, setCookie] = useCookies(["user"]);

  isRunning().then((res) => {
    setNewGame(Boolean(res.data[0].locked));
    if (newGame) {
      setBtnText("Create");
    } else {
      setGameID(res.data[0].game_id);
    }
    setPageLoading(false);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    setBtnLoading(true);
    setFieldDisabled(true);
    setCookie("name", data.playerName, { path: "/" });
    if (newGame) {
      createGame().then((res) => {
        setGameID(res.data.insertId);
        // New game
        props.line(1);
      });
    } else {
      // Join one
      props.line(1);
    }
  }

  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "40%" }}
        >
          {pageLoading ? (
            <Skeleton variant="rectangular" width={210} height={118} />
          ) : (
            <Paper
              variant="outlined"
              sx={{ mt: 1, px: 2, py: 2, maxWidth: 300 }}
            >
              <TextField
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
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <LoadingButton
                loading={btnLoading}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
              >
                {btnText}
              </LoadingButton>
            </Paper>
          )}
        </Grid>
      </form>
    </ThemeProvider>
  );
}
