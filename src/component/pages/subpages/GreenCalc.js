import * as React from "react";
import * as Mat from "@mui/material";
import * as Lab from "@mui/lab";
import * as Ico from "@mui/icons-material";
import * as Dic from "../../helper/dictionary";
import * as Api from "../../../logic/api";
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
  const { register: registerGreen, handleSubmit: handleGreenSubmit } =
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
    Calc.GetSum(data, neigh);
    console.log(data, neigh);
  };

  const handleChange = (event: SelectChangeEvent<typeof neigh>) => {
    const {
      target: { value },
    } = event;
    setNeigh(typeof value === "string" ? value.split(",") : value);
  };

  const GreenField = React.forwardRef((props, ref) => {
    return (
      <Mat.TextField
        defaultValue=""
        type="number"
        id={props.field.val}
        label={props.field.label}
        color="primary"
        InputProps={{
          inputProps: { min: 0, max: 10 },
        }}
      />
    );
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
              field={field}
              ref={{ ...registerGreen(field.val) }}
            />
          ))}

          <Mat.FormControl>
            <Mat.InputLabel id="select">Select Neighbouring</Mat.InputLabel>
            <Mat.Select
              labelId="select"
              multiple
              value={neigh}
              onChange={handleChange}
              input={<Mat.OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
            >
              <Mat.MenuItem value={Dic.String.select_green[lang][0].val}>
                <Mat.Checkbox
                  checked={
                    neigh.indexOf(Dic.String.select_green[lang][0].val) > -1
                  }
                />
                <Mat.ListItemText
                  primary={Dic.String.select_green[lang][0].label}
                />
              </Mat.MenuItem>
              <Mat.MenuItem value={Dic.String.select_green[lang][1].val}>
                <Mat.Checkbox
                  checked={
                    neigh.indexOf(Dic.String.select_green[lang][1].val) > -1
                  }
                />
                <Mat.ListItemText
                  primary={Dic.String.select_green[lang][1].label}
                />
              </Mat.MenuItem>
              <Mat.MenuItem value={Dic.String.select_green[lang][2].val}>
                <Mat.Checkbox
                  checked={
                    neigh.indexOf(Dic.String.select_green[lang][2].val) > -1
                  }
                />
                <Mat.ListItemText
                  primary={Dic.String.select_green[lang][2].label}
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
          Calc
        </Lab.LoadingButton>
      </form>
    </Mat.ThemeProvider>
  );
}
