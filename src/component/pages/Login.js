import * as React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Box,
  Paper,
  ThemeProvider,
  InputAdornment,
  CssBaseline,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function _(props) {
  const [loading, setLoading] = React.useState(false);
  const btn_text = props.mode === "create" ? "Create" : "Join";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    setLoading(true);
    console.log(data);
  }

  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            marginTop: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: 2,
            py: 2,
          }}
        >
          <Paper sx={{ mt: 1, px: 2, py: 2 }}>
            <TextField
              error={errors.player_name ? true : false}
              {...register("player_name", { required: true })}
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
              loading={loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
            >
              {btn_text}
            </LoadingButton>
          </Paper>
        </Box>
      </form>
    </ThemeProvider>
  );
}
