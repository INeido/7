import * as React from "react";
import * as Mat from "@mui/material";
import * as Ico from "@mui/icons-material";
import * as Dic from "../helper/dic";
import * as Api from "../../logic/api";
import * as Form from "react-hook-form";

export default function _(props) {
  const [pageLoading, setPageLoading] = React.useState(true);
  const [pointFields, setPointFields] = React.useState(Dic.PointFieldsSimple);
  const [fieldDisabled, setFieldDisabled] = React.useState(false);
  const [sum, setSum] = React.useState(0);

  const updateSum = () => {
    const values = getValues();
    const sumVal =
      parseInt(values.wonder !== "" ? values.wonder : 0) +
      parseInt(values.money !== "" ? values.money : 0) +
      parseInt(values.red !== "" ? values.red : 0) +
      parseInt(values.blue !== "" ? values.blue : 0) +
      parseInt(values.yellow !== "" ? values.yellow : 0) +
      parseInt(values.green !== "" ? values.green : 0) +
      parseInt(values.purple !== "" ? values.purple : 0) +
      parseInt(values.black !== "" ? values.black : 0) +
      parseInt(values.white !== "" ? values.white : 0) +
      parseInt(values.armada0 !== "" ? values.armada0 : 0) +
      parseInt(values.armada1 !== "" ? values.armada1 : 0);
    setSum(sumVal);
    return sumVal;
  };

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
    tempObject.sum = updateSum();
    return Api.updatePlayer(tempObject);
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = Form.useForm();
  const onSubmit = (data) => {
    setFieldDisabled(true);
    updatePlayerObject(data).then((res) => {
      props.forward(data);
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
                  error={errors.wonder ? true : false}
                  {...register("wonder", { required: true })}
                  onChange={updateSum}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.wonder}
                  type="number"
                  id="wonder"
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
                  error={errors.money ? true : false}
                  {...register("money", { required: true })}
                  onChange={updateSum}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.money}
                  type="number"
                  id="money"
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
                  error={errors.red ? true : false}
                  {...register("red", { required: true })}
                  onChange={updateSum}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.red}
                  type="number"
                  id="red"
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
                  error={errors.blue ? true : false}
                  {...register("blue", { required: true })}
                  onChange={updateSum}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.blue}
                  type="number"
                  id="blue"
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
                  error={errors.yellow ? true : false}
                  {...register("yellow", { required: true })}
                  onChange={updateSum}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.yellow}
                  type="number"
                  id="yellow"
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
                  error={errors.green ? true : false}
                  {...register("green", { required: true })}
                  onChange={updateSum}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.green}
                  type="number"
                  id="green"
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
                  error={errors.purple ? true : false}
                  {...register("purple", { required: true })}
                  onChange={updateSum}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.purple}
                  type="number"
                  id="purple"
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
                  error={errors.black ? true : false}
                  {...register("black", { required: true })}
                  onChange={updateSum}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.black}
                  type="number"
                  id="black"
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
                  error={errors.white ? true : false}
                  {...register("white", { required: true })}
                  onChange={updateSum}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.white}
                  type="number"
                  id="white"
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
                  error={errors.armada0 ? true : false}
                  {...register("armada0", { required: true })}
                  onChange={updateSum}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.armada0}
                  type="number"
                  id="armada0"
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
                  error={errors.armada1 ? true : false}
                  {...register("armada1", { required: true })}
                  onChange={updateSum}
                  disabled={fieldDisabled}
                  defaultValue={props.playerscores.armada1}
                  type="number"
                  id="armada1"
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
              {pageLoading ? (
                <Mat.Skeleton variant="rectangular" height={55} />
              ) : (
                <Mat.TextField
                  disabled
                  value={sum}
                  type="number"
                  id="sum"
                  label="Sum"
                  color="primary"
                  InputProps={{
                    startAdornment: (
                      <Mat.InputAdornment position="start">
                        <Ico.Functions sx={{ color: "#FFF" }} />
                      </Mat.InputAdornment>
                    ),
                  }}
                />
              )}
            </Mat.Box>
          </Mat.Paper>
        </Mat.Box>

        <Mat.AppBar
          position="fixed"
          style={{
            top: "auto",
            bottom: 0,
          }}
        >
          <Mat.Toolbar>
            <Mat.IconButton color="inherit" onClick={props.backward}>
              <Ico.ArrowBack />
            </Mat.IconButton>
            <Mat.IconButton color="inherit" onClick={toggleFields}>
              {pointFields === Dic.PointFieldsFancy ? (
                <Ico.ToggleOn />
              ) : (
                <Ico.ToggleOff />
              )}
            </Mat.IconButton>
            <div style={{ flexGrow: 1 }} />
            <Mat.IconButton color="inherit" type="submit">
              <Ico.ArrowForward />
            </Mat.IconButton>
          </Mat.Toolbar>
        </Mat.AppBar>
        <Mat.Toolbar />
      </form>
    </Mat.ThemeProvider>
  );
}
