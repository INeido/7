import * as React from "react";
import * as Mat from "@mui/material";
import * as Grid from "@mui/x-data-grid";
import * as Dic from "../../helper/dictionary";
import * as Api from "../../../logic/api";
import * as Cookie from "react-cookie";

export default function _(props) {
  const [games, setGames] = React.useState([]);
  const [cookies] = Cookie.useCookies(["user"]);
  const [lang] = React.useState(cookies.lang !== null ? cookies.lang : "en");

  React.useEffect(() => {
    try {
      Api.getGames().then((res) => {
        const gamesWithDateObjects = res.data.map((game) => ({
          ...game,
          date: new Date(game.date),
        }));

        setGames(gamesWithDateObjects);
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
  
          columns.forEach(
            (c) => (thisRow[c.field] = params.row[c.field])
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
      valueFormatter: (params) => {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        return new Intl.DateTimeFormat("de-DE", options).format(params.value);
      },
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
