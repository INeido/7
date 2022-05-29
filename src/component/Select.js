import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import SaveIcon from "@mui/icons-material/Save";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Select.css";

const wonder = [
  "Ephesos",
  "Gizah",
  "Olympia",
  "Alexandria",
  "Rhodos",
  "Babylon",
  "Halikarnassos",
  "Petra",
  "Byzantium",
  "Siracusa",
  "Roma",
  "Abu Simbel",
];

export default class Select extends React.Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={this.props.theme}>
          <Fab
            color="primary"
            sx={{ position: "absolute", bottom: 16, left: 16 }}
          >
            <ArrowBackIcon />
          </Fab>
          <Fab
            color="primary"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
          >
            <VisibilityOutlinedIcon />
          </Fab>
          <Fab
            color="primary"
            sx={{ position: "absolute", bottom: 90, right: 16 }}
          >
            <SaveIcon />
          </Fab>

          <Box
            sx={{
              marginTop: 2,
              display: "grid",
              gap: 1.5,
            }}
          >
            <TextField select color="primary" label="Select Wonder">
              {wonder.map((choice) => (
                <MenuItem key={choice} value={choice}>
                  {choice}
                </MenuItem>
              ))}
            </TextField>
            <Box
              sx={{
                display: "grid",
                gap: 1.5,
                gridTemplateColumns: "repeat(2, 1fr)",
              }}
            >
              <TextField select color="primary" label="Select Mode">
                <MenuItem key="Day" value="Day">
                  Day
                </MenuItem>
                <MenuItem key="Night" value="Night">
                  Night
                </MenuItem>
              </TextField>
              <TextField
                type="number"
                id="wonder"
                label="Wonder"
                color="primary"
              />
              <TextField
                type="number"
                id="money"
                label="Wealth"
                color="primary"
              />
              <TextField
                type="number"
                id="red"
                label="Military"
                color="primary"
              />
              <TextField
                type="number"
                id="blue"
                label="Monuments"
                color="primary"
              />
              <TextField
                type="number"
                id="yellow"
                label="Trade"
                color="primary"
              />
              <TextField
                type="number"
                id="green"
                label="Infrastructure"
                color="primary"
              />
              <TextField
                type="number"
                id="purple"
                label="Academia"
                color="primary"
              />
              <TextField
                type="number"
                id="black"
                label="Underworld"
                color="primary"
              />
              <TextField
                type="number"
                id="white"
                label="Leaders"
                color="primary"
              />
              <TextField
                type="number"
                id="armada0"
                label="Naval Battles"
                color="primary"
              />
              <TextField
                type="number"
                id="armada1"
                label="Harbour"
                color="primary"
              />
            </Box>
          </Box>
        </ThemeProvider>
      </div>
    );
  }
}
