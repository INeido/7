import React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import { ThemeProvider } from "@mui/material/styles";

export default function Login(props) {
  var button;
  if (props.mode === "create") {
    button = (
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
        Create
      </Button>
    );
  } else {
    button = (
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
        Join
      </Button>
    );
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const errorMessage = (error) => {
    return "error";
  };

  return (
    <div className="App">
      <ThemeProvider theme={props.theme}>
        <Container component="main" maxWidth="xs">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                marginTop: "40%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box sx={{ mt: 1 }}>
                <TextField
                  error={errors.player_name ? true : false}
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
                  ref={register("player_name", {
                    required: true,
                  })}
                />
                {button}
              </Box>
            </Box>
          </form>
        </Container>
      </ThemeProvider>
    </div>
  );
}
