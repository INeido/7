import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import { ThemeProvider } from "@mui/material/styles";
import "./Login.css";

export default class Login extends React.Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={this.props.theme}>
          <Container component="main" maxWidth="xs">
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
                  margin="normal"
                  fullWidth
                  name="name"
                  label="Name"
                  type="text"
                  id="name"
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
                <Button fullWidth variant="contained" sx={{ mt: 3 }}>
                  Create
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}
