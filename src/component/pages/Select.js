import * as React from "react";
import * as Mat from "@mui/material";
import * as Ico from "@mui/icons-material";
import * as Dic from "../helper/dic";
import * as Api from "../../logic/api";
import { useForm } from "react-hook-form";

export default function _(props) {
  const [pageLoading, setPageLoading] = React.useState(true);
  const [pointFields, setPointFields] = React.useState(Dic.PointFieldsSimple);
  const [fieldDisabled, setFieldDisabled] = React.useState(false);

  const toggleFields = () => {
    setPointFields(
      pointFields === Dic.PointFieldsFancy
        ? Dic.PointFieldsSimple
        : Dic.PointFieldsFancy
    );
  };

  React.useEffect(() => {
    setPageLoading(false);
  }, []);

  const updatePlayerObject = (data) => {
    var tempObject = data;
    tempObject.player_name = props.playername;
    tempObject.player_id = props.playerid;
    return Api.updatePlayer(tempObject);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setFieldDisabled(true);
    updatePlayerObject(data).then((res) => {
      props.line(data);
    });
  };

  return (
    <Mat.ThemeProvider theme={props.theme}>
      <Mat.CssBaseline />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Mat.Box
          sx={{
            marginTop: 2,
            display: "grid",
            gap: 1.5,
            px: 2,
            py: 2,
          }}
        >
          <Mat.Box
            sx={{
              display: "grid",
              gap: 1.5,
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            {pageLoading ? (
              <Mat.Skeleton variant="rectangular" height={55} />
            ) : (
              <Mat.TextField
                error={errors.wonder_name ? true : false}
                {...register("wonder_name", { required: true })}
                disabled={fieldDisabled}
                defaultValue={props.playerscores.wonder_name}
                name="wonder_name"
                select
                color="primary"
                label="Select Wonder"
                variant="outlined"
              >
                {Dic.WonderNames.map((choice) => (
                  <Mat.MenuItem key={choice} value={choice}>
                    {choice}
                  </Mat.MenuItem>
                ))}
              </Mat.TextField>
            )}
            {pageLoading ? (
              <Mat.Skeleton variant="rectangular" height={55} />
            ) : (
              <Mat.TextField
                error={errors.wonder_mode ? true : false}
                {...register("wonder_mode", { required: true })}
                disabled={fieldDisabled}
                defaultValue={props.playerscores.wonder_mode}
                name="wonder_mode"
                select
                color="primary"
                label="Select Mode"
              >
                {Dic.Modes.map((choice) => (
                  <Mat.MenuItem key={choice} value={choice}>
                    {choice}
                  </Mat.MenuItem>
                ))}
              </Mat.TextField>
            )}
          </Mat.Box>
          <Mat.Paper variant="outlined">
            <Mat.Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                px: 2,
                py: 2,
                paddingBottom: "1px",
              }}
            >
              <Mat.Typography variant="h5">
                {pageLoading ? <Mat.Skeleton width={160} /> : "Enter Points"}
              </Mat.Typography>
            </Mat.Box>
            <Mat.Box
              sx={{
                display: "grid",
                gap: 1.5,
                gridTemplateColumns: "repeat(2, 1fr)",
                px: 2,
                py: 2,
              }}
            >
              {pageLoading ? (
                <Mat.Skeleton variant="rectangular" height={55} />
              ) : (
                <Mat.TextField
                  error={errors.sc_wonder ? true : false}
                  {...register("sc_wonder", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.sc_wonder}
                  type="number"
                  id="sc_wonder"
                  label={pointFields[0].label}
                  color="primary"
                  InputProps={{
                    inputProps: { min: -99, max: 99 },
                    startAdornment: (
                      <Mat.InputAdornment position="start">
                        <Ico.Eject sx={{ color: "#ffb74d" }} />
                      </Mat.InputAdornment>
                    ),
                  }}
                />
              )}

              {pageLoading ? (
                <Mat.Skeleton variant="rectangular" height={55} />
              ) : (
                <Mat.TextField
                  error={errors.sc_money ? true : false}
                  {...register("sc_money", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.sc_money}
                  type="number"
                  id="sc_money"
                  label={pointFields[1].label}
                  color="primary"
                  InputProps={{
                    inputProps: { min: -99, max: 99 },
                    startAdornment: (
                      <Mat.InputAdornment position="start">
                        <Ico.Circle sx={{ color: "#ffb74d" }} />
                      </Mat.InputAdornment>
                    ),
                  }}
                />
              )}

              {pageLoading ? (
                <Mat.Skeleton variant="rectangular" height={55} />
              ) : (
                <Mat.TextField
                  error={errors.sc_red ? true : false}
                  {...register("sc_red", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.sc_red}
                  type="number"
                  id="sc_red"
                  label={pointFields[2].label}
                  color="primary"
                  InputProps={{
                    inputProps: { min: -99, max: 99 },
                    startAdornment: (
                      <Mat.InputAdornment position="start">
                        <Ico.Report sx={{ color: "#B80000" }} />
                      </Mat.InputAdornment>
                    ),
                  }}
                />
              )}

              {pageLoading ? (
                <Mat.Skeleton variant="rectangular" height={55} />
              ) : (
                <Mat.TextField
                  error={errors.sc_blue ? true : false}
                  {...register("sc_blue", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.sc_blue}
                  type="number"
                  id="sc_blue"
                  label={pointFields[3].label}
                  color="primary"
                  InputProps={{
                    inputProps: { min: -99, max: 99 },
                    startAdornment: (
                      <Mat.InputAdornment position="start">
                        <Ico.Remove sx={{ color: "#0693E3" }} />
                      </Mat.InputAdornment>
                    ),
                  }}
                />
              )}
              {pageLoading ? (
                <Mat.Skeleton variant="rectangular" height={55} />
              ) : (
                <Mat.TextField
                  error={errors.sc_yellow ? true : false}
                  {...register("sc_yellow", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.sc_yellow}
                  type="number"
                  id="sc_yellow"
                  label={pointFields[4].label}
                  color="primary"
                  InputProps={{
                    inputProps: { min: -99, max: 99 },
                    startAdornment: (
                      <Mat.InputAdornment position="start">
                        <Ico.Circle sx={{ color: "#FCB900" }} />
                      </Mat.InputAdornment>
                    ),
                  }}
                />
              )}
              {pageLoading ? (
                <Mat.Skeleton variant="rectangular" height={55} />
              ) : (
                <Mat.TextField
                  error={errors.sc_green ? true : false}
                  {...register("sc_green", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.sc_green}
                  type="number"
                  id="sc_green"
                  label={pointFields[5].label}
                  color="primary"
                  InputProps={{
                    inputProps: { min: -99, max: 99 },
                    startAdornment: (
                      <Mat.InputAdornment position="start">
                        <Ico.ChangeHistory sx={{ color: "#008B02" }} />
                      </Mat.InputAdornment>
                    ),
                  }}
                />
              )}
              {pageLoading ? (
                <Mat.Skeleton variant="rectangular" height={55} />
              ) : (
                <Mat.TextField
                  error={errors.sc_purple ? true : false}
                  {...register("sc_purple", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.sc_purple}
                  type="number"
                  id="sc_purple"
                  label={pointFields[6].label}
                  color="primary"
                  InputProps={{
                    inputProps: { min: -99, max: 99 },
                    startAdornment: (
                      <Mat.InputAdornment position="start">
                        <Ico.StarOutline sx={{ color: "#4A148C" }} />
                      </Mat.InputAdornment>
                    ),
                  }}
                />
              )}
              {pageLoading ? (
                <Mat.Skeleton variant="rectangular" height={55} />
              ) : (
                <Mat.TextField
                  error={errors.sc_black ? true : false}
                  {...register("sc_black", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.sc_black}
                  type="number"
                  id="sc_black"
                  label={pointFields[7].label}
                  color="primary"
                  InputProps={{
                    inputProps: { min: -99, max: 99 },
                    startAdornment: (
                      <Mat.InputAdornment position="start">
                        <Ico.Details sx={{ color: "#767676" }} />
                      </Mat.InputAdornment>
                    ),
                  }}
                />
              )}
              {pageLoading ? (
                <Mat.Skeleton variant="rectangular" height={55} />
              ) : (
                <Mat.TextField
                  error={errors.sc_white ? true : false}
                  {...register("sc_white", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.sc_white}
                  type="number"
                  id="sc_white"
                  label={pointFields[8].label}
                  color="primary"
                  InputProps={{
                    inputProps: { min: -99, max: 99 },
                    startAdornment: (
                      <Mat.InputAdornment position="start">
                        <Ico.RemoveCircle sx={{ color: "#FFF" }} />
                      </Mat.InputAdornment>
                    ),
                  }}
                />
              )}
              {pageLoading ? (
                <Mat.Skeleton variant="rectangular" height={55} />
              ) : (
                <Mat.TextField
                  error={errors.sc_armada0 ? true : false}
                  {...register("sc_armada0", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.sc_armada0}
                  type="number"
                  id="sc_armada0"
                  label={pointFields[9].label}
                  color="primary"
                  InputProps={{
                    inputProps: { min: -99, max: 99 },
                    startAdornment: (
                      <Mat.InputAdornment position="start">
                        <Ico.RemoveCircle sx={{ color: "#FFF" }} />
                      </Mat.InputAdornment>
                    ),
                  }}
                />
              )}
              {pageLoading ? (
                <Mat.Skeleton variant="rectangular" height={55} />
              ) : (
                <Mat.TextField
                  error={errors.sc_armada1 ? true : false}
                  {...register("sc_armada1", { required: true })}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.sc_armada1}
                  type="number"
                  id="sc_armada1"
                  label={pointFields[10].label}
                  color="primary"
                  InputProps={{
                    inputProps: { min: -99, max: 99 },
                    startAdornment: (
                      <Mat.InputAdornment position="start">
                        <Ico.RemoveCircle sx={{ color: "#FFF" }} />
                      </Mat.InputAdornment>
                    ),
                  }}
                />
              )}
            </Mat.Box>
          </Mat.Paper>
        </Mat.Box>
        <Mat.Fab
          type="submit"
          color="primary"
          InputProps={{
            inputProps: { min: -99, max: 99 },
            startAdornment: (
              <Mat.InputAdornment position="start">
                <Ico.RemoveCircle sx={{ color: "#FFF" }} />
              </Mat.InputAdornment>
            ),
          }}
          sx={{ position: "absolute", bottom: 16, right: 16 }}
        >
          <Ico.ArrowForward />
        </Mat.Fab>
      </form>

      <Mat.IconButton
        color="primary"
        InputProps={{
          inputProps: { min: -99, max: 99 },
          startAdornment: (
            <Mat.InputAdornment position="start">
              <Ico.Circle sx={{ color: "#ffb74d" }} />
            </Mat.InputAdornment>
          ),
        }}
        onClick={toggleFields}
        sx={{ position: "absolute", bottom: 16, left: 16 }}
      >
        {pointFields === Dic.PointFieldsFancy ? (
          <Ico.ToggleOn />
        ) : (
          <Ico.ToggleOff />
        )}
      </Mat.IconButton>

      <Mat.Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        sx={{ position: "absolute", bottom: 10 }}
      ></Mat.Grid>
    </Mat.ThemeProvider>
  );
}
