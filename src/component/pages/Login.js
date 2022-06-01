import * as React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Grid,
  Paper,
  ThemeProvider,
  InputAdornment,
  CssBaseline,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function _(props) {
  const [btn_loading, setLoading] = React.useState(false);
  const [field_disabled, setDisabled] = React.useState(false);
  const btn_text = props.mode === "create" ? "Create" : "Join";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    setLoading(true);
    setDisabled(true);
    console.log(data);
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
          <Paper variant="outlined" sx={{ mt: 1, px: 2, py: 2 }}>
            <TextField
              error={errors.player_name ? true : false}
              {...register("player_name", { required: true })}
              disabled={field_disabled}
              fullWidth
              autoFocus
              helperText={errors.player_name ? "Bitte Namen eingeben." : ""}
              margin="normal"
              name="player_name"
              label="Name"
              type="text"
              id="player_name"
              variant="standard"
              color="primary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <LoadingButton
              loading={btn_loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
            >
              {btn_text}
            </LoadingButton>
          </Paper>
        </Grid>
      </form>
    </ThemeProvider>
  );
}
