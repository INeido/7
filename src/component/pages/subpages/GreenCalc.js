import * as React from "react";
import * as Mat from "@mui/material";
import * as Ico from "@mui/icons-material";
import * as Dic from "../../helper/dictionary";
import * as Api from "../../../logic/api";
import * as Form from "react-hook-form";
import * as Cookie from "react-cookie";

export default function _(props) {
  const [cookies] = Cookie.useCookies(["user"]);
  const [lang] = React.useState(cookies.lang !== null ? cookies.lang : "en");

  return (
    <Mat.ThemeProvider theme={props.theme}>
      <Mat.CssBaseline />
      <Mat.Box
        sx={{
          display: "grid",
          gap: 1.5,
          padding: "15px",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <Mat.TextField
          //onChange={updateSum}
          defaultValue=""
          type="number"
          id="compass"
          label={Dic.String.calc_compass[lang]}
          color="primary"
          InputProps={{
            inputProps: { min: 0, max: 99 },
          }}
        />
        <Mat.TextField
          //onChange={updateSum}
          defaultValue=""
          type="number"
          id="gear"
          label={Dic.String.calc_gear[lang]}
          color="primary"
          InputProps={{
            inputProps: { min: 0, max: 99 },
          }}
        />
        <Mat.TextField
          //onChange={updateSum}
          defaultValue=""
          type="number"
          id="tablet"
          label={Dic.String.calc_tablet[lang]}
          color="primary"
          InputProps={{
            inputProps: { min: 0, max: 99 },
          }}
        />
        <Mat.TextField
          //onChange={updateSum}
          defaultValue=""
          type="number"
          id="wildcard"
          label={Dic.String.calc_wildcard[lang]}
          color="primary"
          InputProps={{
            inputProps: { min: 0, max: 99 },
          }}
        />
        <Mat.TextField
          //onChange={updateSum}
          defaultValue=""
          type="number"
          id="copy"
          label={Dic.String.calc_copy[lang]}
          color="primary"
          InputProps={{
            inputProps: { min: 0, max: 99 },
          }}
        />
        <Mat.TextField
          //onChange={updateSum}
          defaultValue=""
          type="number"
          id="maxplus"
          label={Dic.String.calc_maxplus[lang]}
          color="primary"
          InputProps={{
            inputProps: { min: 0, max: 99 },
          }}
        />
        <Mat.TextField
          disabled
          defaultValue=""
          type="number"
          id="sc_sum"
          label={Dic.String.label_sum[lang]}
          color="primary"
        />
      </Mat.Box>
    </Mat.ThemeProvider>
  );
}
