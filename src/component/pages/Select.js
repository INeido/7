import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Divider from "@mui/material/Divider";

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

export default function Select(props) {
  return (
    <div className="App">
      <ThemeProvider theme={props.theme}>
        <Fab
          color="primary"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
        >
          <ArrowForwardIcon />
        </Fab>

        <Box
          sx={{
            marginTop: 2,
            display: "grid",
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gap: 1.5,
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            <TextField
              select
              color="primary"
              label="Select Wonder"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { border: "solid darkgray 2px" },
                },
              }}
            >
              {wonder.map((choice) => (
                <MenuItem key={choice} value={choice}>
                  {choice}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              color="primary"
              label="Select Mode"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { border: "solid darkgray 2px" },
                },
              }}
            >
              <MenuItem key="Day" value="Day">
                Day
              </MenuItem>
              <MenuItem key="Night" value="Night">
                Night
              </MenuItem>
            </TextField>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "grid",
              gap: 1.5,
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
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
