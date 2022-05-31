import { useForm } from "react-hook-form";
import {
  Button,
  TextField,
  Box,
  Paper,
  ThemeProvider,
  InputAdornment,
  CssBaseline,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function Login(props) {
  var buttons = [
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
      Create
    </Button>,
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
      Join
    </Button>,
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
      Join
    </Button>,
  ];
  var button = 0;
  if (props.mode === "create") {
    button = 0;
  } else {
    button = 1;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
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
            {buttons[button]}
          </Paper>
        </Box>
      </form>
    </ThemeProvider>
  );
}
