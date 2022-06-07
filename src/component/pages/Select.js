/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import dic from "../helper/dic";
import { useForm } from "react-hook-form";
import {
  MenuItem,
  InputAdornment,
  TextField,
  Grid,
  Box,
  Paper,
  Fab,
  ThemeProvider,
  CssBaseline,
  Typography,
  IconButton,
  Skeleton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import CircleIcon from "@mui/icons-material/Circle";
import {
  getPlayer,
  isPlayer,
  createPlayer,
  updatePlayer,
} from "../../logic/api";

export default function _(props) {
  const [pointFields, setPointFields] = React.useState(dic.PointFieldsSimple);
  const [defaultValues, setDefaultValues] = React.useState(dic.DefaultValues);
  const [fieldDisabled, setFieldDisabled] = React.useState(false);
  const [pageLoading, setPageLoading] = React.useState(true);
  const [playerID, setPlayerID] = React.useState(0);

  function toggleFields() {
    setPointFields(
      pointFields === dic.PointFieldsFancy
        ? dic.PointFieldsSimple
        : dic.PointFieldsFancy
    );
  }

  React.useEffect(() => {
    isPlayer(props.gameid, props.playername).then((res) => {
      try {
        setPlayerID(res.data[0].player_id);
        console.log("Player found with ID: " + res.data[0].player_id);
        getPlayer(res.data[0].player_id).then((res) => {
          if (res.data[0] !== undefined) {
            setDefaultValues(res.data[0]);
            setPageLoading(false);
            console.log("Player found with name: " + res.data[0].player_name);
          }
        });
      } catch {
        createPlayer(props.gameid, props.playername).then((res) => {
          setPlayerID(res.data.insertId);
          console.log("Player created. ID: " + res.data.insertId);
        });
        setPageLoading(false);
      }
    });
  }, []);

  function updatePlayerObject(data) {
    var tempObject = data;
    tempObject.player_name = props.playername;
    tempObject.player_id = playerID;
    return updatePlayer(tempObject);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    setFieldDisabled(true);
    updatePlayerObject(data).then((res) => {
      props.line(res.data);
    });
  }

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
            {pageLoading ? (
              <Skeleton variant="rectangular" height={55} />
            ) : (
              <TextField
                error={errors.wonder_name ? true : false}
                {...register("wonder_name", { required: true })}
                disabled={fieldDisabled}
                defaultValue={defaultValues.wonder_name}
                name="wonder_name"
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
            )}
            {pageLoading ? (
              <Skeleton variant="rectangular" height={55} />
            ) : (
              <TextField
                error={errors.wonder_mode ? true : false}
                {...register("wonder_mode", { required: true })}
                disabled={fieldDisabled}
                defaultValue={defaultValues.wonder_mode}
                name="wonder_mode"
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
            )}
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
              <Typography variant="h5">
                {pageLoading ? <Skeleton width={160} /> : "Enter Points"}
              </Typography>
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
              {pageLoading ? (
                <Skeleton variant="rectangular" height={55} />
              ) : (
                <TextField
                  error={errors.sc_wonder ? true : false}
                  {...register("sc_wonder", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={defaultValues.sc_wonder}
                  type="number"
                  id="sc_wonder"
                  label={pointFields[0].label}
                  color="primary"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CircleIcon sx={{ color: "#ffb74d" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              )}

              {pageLoading ? (
                <Skeleton variant="rectangular" height={55} />
              ) : (
                <TextField
                  error={errors.sc_money ? true : false}
                  {...register("sc_money", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={defaultValues.sc_money}
                  type="number"
                  id="sc_money"
                  label={pointFields[1].label}
                  color="primary"
                />
              )}

              {pageLoading ? (
                <Skeleton variant="rectangular" height={55} />
              ) : (
                <TextField
                  error={errors.sc_red ? true : false}
                  {...register("sc_red", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={defaultValues.sc_red}
                  type="number"
                  id="sc_red"
                  label={pointFields[2].label}
                  color="primary"
                />
              )}

              {pageLoading ? (
                <Skeleton variant="rectangular" height={55} />
              ) : (
                <TextField
                  error={errors.sc_blue ? true : false}
                  {...register("sc_blue", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={defaultValues.sc_blue}
                  type="number"
                  id="sc_blue"
                  label={pointFields[3].label}
                  color="primary"
                />
              )}
              {pageLoading ? (
                <Skeleton variant="rectangular" height={55} />
              ) : (
                <TextField
                  error={errors.sc_yellow ? true : false}
                  {...register("sc_yellow", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={defaultValues.sc_yellow}
                  type="number"
                  id="sc_yellow"
                  label={pointFields[4].label}
                  color="primary"
                />
              )}
              {pageLoading ? (
                <Skeleton variant="rectangular" height={55} />
              ) : (
                <TextField
                  error={errors.sc_green ? true : false}
                  {...register("sc_green", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={defaultValues.sc_green}
                  type="number"
                  id="sc_green"
                  label={pointFields[5].label}
                  color="primary"
                />
              )}
              {pageLoading ? (
                <Skeleton variant="rectangular" height={55} />
              ) : (
                <TextField
                  error={errors.sc_purple ? true : false}
                  {...register("sc_purple", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={defaultValues.sc_purple}
                  type="number"
                  id="sc_purple"
                  label={pointFields[6].label}
                  color="primary"
                />
              )}
              {pageLoading ? (
                <Skeleton variant="rectangular" height={55} />
              ) : (
                <TextField
                  error={errors.sc_black ? true : false}
                  {...register("sc_black", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={defaultValues.sc_black}
                  type="number"
                  id="sc_black"
                  label={pointFields[7].label}
                  color="primary"
                />
              )}
              {pageLoading ? (
                <Skeleton variant="rectangular" height={55} />
              ) : (
                <TextField
                  error={errors.sc_white ? true : false}
                  {...register("sc_white", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={defaultValues.sc_white}
                  type="number"
                  id="sc_white"
                  label={pointFields[8].label}
                  color="primary"
                />
              )}
              {pageLoading ? (
                <Skeleton variant="rectangular" height={55} />
              ) : (
                <TextField
                  error={errors.sc_armada0 ? true : false}
                  {...register("sc_armada0", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={defaultValues.sc_armada0}
                  type="number"
                  id="sc_armada0"
                  label={pointFields[9].label}
                  color="primary"
                />
              )}
              {pageLoading ? (
                <Skeleton variant="rectangular" height={55} />
              ) : (
                <TextField
                  error={errors.sc_armada1 ? true : false}
                  {...register("sc_armada1", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={defaultValues.sc_armada1}
                  type="number"
                  id="sc_armada1"
                  label={pointFields[10].label}
                  color="primary"
                />
              )}
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
      ></Grid>
    </ThemeProvider>
  );
}
