import * as React from "react";
import * as Mat from "@mui/material";
import * as Grid from "@mui/x-data-grid";
import * as Dic from "../../helper/dictionary";
import * as Api from "../../../logic/api";
import * as Cookie from "react-cookie";

export default function _(props) {
  const [games, setGames] = React.useState([Dic.DefaultGames]);
  const [cookies] = Cookie.useCookies(["user"]);
  const [lang] = React.useState(cookies.lang !== null ? cookies.lang : "en");

  React.useEffect(() => {
    try {
      Api.getGames().then((res) => {
        setGames(res.data);
      });
    } catch {
      // Handle Error
    }
  }, []);

  const columns = [
    {
      field: "action",
      headerName: "View",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          return props.view(thisRow.id);
        };

        return <Mat.Button onClick={onClick}>View</Mat.Button>;
      },
    },
    { field: "id", headerName: Dic.String.browse_id[lang] },
    {
      field: "locked",
      headerName: Dic.String.browse_locked[lang],
      type: "number",
      sortable: false,
    },
    {
      field: "date",
      headerName: Dic.String.browse_date[lang],
      type: "date",
      minWidth: "200",
      sortable: false,
    },
  ];

  return (
    <Mat.ThemeProvider theme={props.theme}>
      <Mat.CssBaseline />
      <div style={{ height: "100%", width: "100%" }}>
        <Grid.DataGrid rows={games} columns={columns} />
      </div>
    </Mat.ThemeProvider>
  );
}
