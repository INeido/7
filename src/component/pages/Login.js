import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  TextField,
  Box,
  Paper,
  Container,
  ThemeProvider,
  InputAdornment,
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
  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <ThemeProvider theme={props.theme}>
        <Container component="main" maxWidth="xs">
          <Paper>
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
                <Box sx={{ mt: 1 }}>
                  <TextField
                    error={errors.player_name ? true : false}
                    fullWidth
                    autoFocus
                    helperText={
                      errors.player_name ? "Bitte Namen eingeben." : ""
                    }
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
                    {...register("player_name", { required: true })}
                  />
                  {buttons[button]}
                </Box>
              </Box>
            </form>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
}
