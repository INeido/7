import * as React from "react";
import * as Mat from "@mui/material";
import * as Lab from "@mui/lab";
import * as Dic from "../../helper/dictionary";
import * as Form from "react-hook-form";
import * as Calc from "../../../logic/calc";
import * as Cookie from "react-cookie";

export default function _(props) {
  const [cookies] = Cookie.useCookies(["user"]);
  const [lang] = React.useState(
    cookies.lang !== undefined ? cookies.lang : "en"
  );
  const [sum, setSum] = React.useState(0);
  const [neigh, setNeigh] = React.useState([]);
  const inputRef = React.useRef(null);
  const { register: registerGreen, handleSubmit: handleGreenSubmit, formState: { errors } } =
    Form.useForm({
      defaultValues: [
        { Compass: "" },
        { Gear: "" },
        { Tablet: "" },
        { Wildcard: "" },
        { Copy: "" },
        { Maxplus: "" },
      ],
    });

  /* Fires when page is correctly submitted */
  const onGreenSubmit = (data) => {
    let result = Calc.GetSum(data, neigh);
    setSum(result.score);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setNeigh(typeof value === "string" ? value.split(",") : value);
  };

  const GreenField = React.forwardRef((props, ref) => {
    return (
      <Mat.TextField
        ref={ref}
        {...props}
        type="number"
        color="primary"
        InputProps={{
          inputProps: { min: 0, max: 10 },
        }}
      />
    )
  });

  return (
    <Mat.ThemeProvider theme={props.theme}>
      <Mat.CssBaseline />

      {/* Select Form */}
      <form key={2} onSubmit={handleGreenSubmit(onGreenSubmit)}>
        <Mat.Box
          sx={{
            display: "grid",
            gap: 1.5,
            padding: "15px",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          {Dic.String.select_green[lang].map((field) => (
            <GreenField
              key={field.val}
              ref={inputRef}
              label={field.label}
              error={errors[field.val] ? true : false}
              {...registerGreen(field.val, { required: true })}
            />
          ))}

          <Mat.FormControl>
            <Mat.InputLabel id="select">{Dic.String.label_selectneighbouring[lang]}</Mat.InputLabel>
            <Mat.Select
              labelId="select"
              multiple
              value={neigh}
              onChange={handleChange}
              input={<Mat.OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
            >
              <Mat.MenuItem value={Dic.String.select_green[lang][0].val + " R"}>
                <Mat.Checkbox
                  checked={
                    neigh.indexOf(Dic.String.select_green[lang][0].val + " R") > -1
                  }
                />
                <Mat.ListItemText
                  primary={Dic.String.select_green[lang][0].label + " R"}
                />
              </Mat.MenuItem>
              <Mat.MenuItem value={Dic.String.select_green[lang][1].val + " R"}>
                <Mat.Checkbox
                  checked={
                    neigh.indexOf(Dic.String.select_green[lang][1].val + " R") > -1
                  }
                />
                <Mat.ListItemText
                  primary={Dic.String.select_green[lang][1].label + " R"}
                />
              </Mat.MenuItem>
              <Mat.MenuItem value={Dic.String.select_green[lang][2].val + " R"}>
                <Mat.Checkbox
                  checked={
                    neigh.indexOf(Dic.String.select_green[lang][2].val + " R") > -1
                  }
                />
                <Mat.ListItemText
                  primary={Dic.String.select_green[lang][2].label + " R"}
                />
              </Mat.MenuItem>
              <Mat.MenuItem value={Dic.String.select_green[lang][0].val + " L"}>
                <Mat.Checkbox
                  checked={
                    neigh.indexOf(Dic.String.select_green[lang][0].val + " L") > -1
                  }
                />
                <Mat.ListItemText
                  primary={Dic.String.select_green[lang][0].label + " L"}
                />
              </Mat.MenuItem>
              <Mat.MenuItem value={Dic.String.select_green[lang][1].val + " L"}>
                <Mat.Checkbox
                  checked={
                    neigh.indexOf(Dic.String.select_green[lang][1].val + " L") > -1
                  }
                />
                <Mat.ListItemText
                  primary={Dic.String.select_green[lang][1].label + " L"}
                />
              </Mat.MenuItem>
              <Mat.MenuItem value={Dic.String.select_green[lang][2].val + " L"}>
                <Mat.Checkbox
                  checked={
                    neigh.indexOf(Dic.String.select_green[lang][2].val + " L") > -1
                  }
                />
                <Mat.ListItemText
                  primary={Dic.String.select_green[lang][2].label + " L"}
                />
              </Mat.MenuItem>
            </Mat.Select>
          </Mat.FormControl>

          <Mat.TextField
            disabled
            value={sum}
            type="number"
            id="sc_sum"
            label={Dic.String.label_sum[lang]}
            color="primary"
          />
        </Mat.Box>
        <Lab.LoadingButton type="submit" fullWidth variant="contained">
          {Dic.String.label_calculate[lang]}
        </Lab.LoadingButton>
      </form>
    </Mat.ThemeProvider>
  );
}
