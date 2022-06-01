import * as React from "react";
import dic from "../helper/dic";
import { useForm } from "react-hook-form";
import {
  MenuItem,
  TextField,
  Grid,
  Box,
  Paper,
  Fab,
  ThemeProvider,
  CssBaseline,
  Typography,
  MobileStepper,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";

export default function _(props) {
  const [pointFields, setPointFields] = React.useState(dic.PointFieldsSimple);
  function toggleFields() {
    setPointFields(
      pointFields === dic.PointFieldsFancy
        ? dic.PointFieldsSimple
        : dic.PointFieldsFancy
    );
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            marginTop: 2,
            display: "grid",
            gap: 1.5,
            px: 2,
            py: 2,
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
              error={errors.wonder_select ? true : false}
              {...register("wonder_select", { required: true })}
              name="wonder_select"
              select
              color="primary"
              label="Select Wonder"
              variant="outlined"
            >
              {dic.WonderNames.map((choice) => (
                <MenuItem key={choice} value={choice}>
                  {choice}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              error={errors.mode_select ? true : false}
              {...register("mode_select", { required: true })}
              name="mode_select"
              select
              color="primary"
              label="Select Mode"
            >
              {dic.Modes.map((choice) => (
                <MenuItem key={choice} value={choice}>
                  {choice}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Paper variant="outlined">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                px: 2,
                py: 2,
                paddingBottom: "1px",
              }}
            >
              <Typography variant="h5">Enter Points</Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gap: 1.5,
                gridTemplateColumns: "repeat(2, 1fr)",
                px: 2,
                py: 2,
              }}
            >
              {" "}
              <TextField
                error={errors.wonder ? true : false}
                {...register("wonder", { required: true })}
                type="number"
                id="wonder"
                label={pointFields[0].label}
                color="primary"
              />
              <TextField
                error={errors.money ? true : false}
                {...register("money", { required: true })}
                type="number"
                id="money"
                label={pointFields[1].label}
                color="primary"
              />
              <TextField
                error={errors.red ? true : false}
                {...register("red", { required: true })}
                type="number"
                id="red"
                label={pointFields[2].label}
                color="primary"
              />
              <TextField
                error={errors.blue ? true : false}
                {...register("blue", { required: true })}
                type="number"
                id="blue"
                label={pointFields[3].label}
                color="primary"
              />
              <TextField
                error={errors.yellow ? true : false}
                {...register("yellow", { required: true })}
                type="number"
                id="yellow"
                label={pointFields[4].label}
                color="primary"
              />
              <TextField
                error={errors.green ? true : false}
                {...register("green", { required: true })}
                type="number"
                id="green"
                label={pointFields[5].label}
                color="primary"
              />
              <TextField
                error={errors.purple ? true : false}
                {...register("purple", { required: true })}
                type="number"
                id="purple"
                label={pointFields[6].label}
                color="primary"
              />
              <TextField
                error={errors.black ? true : false}
                {...register("black", { required: true })}
                type="number"
                id="black"
                label={pointFields[7].label}
                color="primary"
              />
              <TextField
                error={errors.white ? true : false}
                {...register("white", { required: true })}
                type="number"
                id="white"
                label={pointFields[8].label}
                color="primary"
              />
              <TextField
                error={errors.armada0 ? true : false}
                {...register("armada0", { required: true })}
                type="number"
                id="armada0"
                label={pointFields[9].label}
                color="primary"
              />
              <TextField
                error={errors.armada1 ? true : false}
                {...register("armada1", { required: true })}
                type="number"
                id="armada1"
                label={pointFields[10].label}
                color="primary"
              />
            </Box>
          </Paper>
        </Box>
        <Fab
          type="submit"
          color="primary"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
        >
          <ArrowForwardIcon />
        </Fab>
      </form>

      <IconButton
        color="primary"
        onClick={toggleFields}
        sx={{ position: "absolute", bottom: 16, left: 16 }}
      >
        {pointFields === dic.PointFieldsFancy ? (
          <ToggleOnIcon />
        ) : (
          <ToggleOffIcon />
        )}
      </IconButton>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        sx={{ position: "absolute", bottom: 10 }}
      >
        <MobileStepper
          variant="dots"
          steps={2}
          activeStep={0}
          position="static"
        />
      </Grid>
    </ThemeProvider>
  );
}
