/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import * as Mat from "@mui/material";
import * as Ico from "@mui/icons-material";
import * as Chart from "recharts";
import * as Dic from "../helper/dictionary";
import * as Api from "../../logic/api";
import * as Cookie from "react-cookie";

export default function _(props) {
  const [cookies] = Cookie.useCookies(["user"]);
  const [lang] = React.useState(
    cookies.lang !== undefined ? cookies.lang : "en"
  );
  const [scores, setScores] = React.useState([Dic.DefaultScores]);
  const [pageLoading, setPageLoading] = React.useState(true);

  /* Catch Rerender */
  React.useEffect(() => {
    const interval = setInterval(() => {
      try {
        Api.getScores(props.gameid).then((res) => {
          if (scores !== res.data) {
            setScores(res.data);
          }
          setPageLoading(false);
        });
      } catch {
        // Handle Error
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Function to normalize data within a range
  function normalize(value, min, max) {
    return (value - min) / (max - min);
  }

  // Define an array of colors for the pie segments
  const PlayerColors = [
    Mat.colors.blue["A700"],
    Mat.colors.red["A700"],
    Mat.colors.green["A700"],
    Mat.colors.purple["A700"],
    Mat.colors.orange["A700"],
    Mat.colors.teal["A700"],
    Mat.colors.pink["A700"],
  ];

  const ScoreColors = [
    "#ffb74d",
    "#d8cb0a",
    "#B80000",
    "#0693E3",
    "#FCB900",
    "#008B02",
    "#4A148C",
    "#767676",
    "#b0b6c1",
    "#0a50d3",
    "#10a1ef",
  ];

  const generatePlayerColor = index => PlayerColors[index % PlayerColors.length];
  const generateScoreColor = index => ScoreColors[index % ScoreColors.length];

  // Calculate the count of "Days" and "Night" players
  const daysCount = scores.filter(score => score.wonder_mode === 'Day').length;
  const nightCount = scores.filter(score => score.wonder_mode === 'Night').length;

  // Prepare data for the pie chart
  const modePieChart = [
    { name: Dic.String.select_modes[lang][0].label, value: daysCount },
    { name: Dic.String.select_modes[lang][1].label, value: nightCount },
  ];

  const playerScore = scores.find(score => score.player_name === props.playername);

  let selfRadarChart = [];

  if (playerScore) {
    const tempSelfRadarChart = [
      { name: Dic.String.label_wonder[lang], value: playerScore.wonder },
      { name: Dic.String.label_money[lang], value: playerScore.money },
      { name: Dic.String.label_red[lang], value: playerScore.red },
      { name: Dic.String.label_blue[lang], value: playerScore.blue },
      { name: Dic.String.label_yellow[lang], value: playerScore.yellow },
      { name: Dic.String.label_green[lang], value: playerScore.green },
      { name: Dic.String.label_purple[lang], value: playerScore.purple },
      { name: Dic.String.label_black[lang], value: playerScore.black },
      { name: Dic.String.label_white[lang], value: playerScore.white },
      { name: Dic.String.label_armada0[lang], value: playerScore.armada0 },
      { name: Dic.String.label_armada1[lang], value: playerScore.armada1 },
    ];

    const maxDataValue = Math.max(...tempSelfRadarChart.map(entry => entry.value));
    const minDataValue = Math.min(...tempSelfRadarChart.map(entry => entry.value));

    selfRadarChart = tempSelfRadarChart.map(entry => ({
      name: entry.name,
      value: normalize(Math.log(entry.value + 1), Math.log(minDataValue + 1), Math.log(maxDataValue + 1)),
    }));
  }

  // Extract the necessary data for the pie chart (sum and player_name)
  const sumPieChart = scores.map((entry) => ({
    value: entry.sum,
    name: entry.player_name,
  }));

  const stackedBarChart = scores.map(player => ({
    name: player.player_name,
    wonder: player.wonder,
    money: player.money,
    red: player.red,
    blue: player.blue,
    yellow: player.yellow,
    green: player.green,
    purple: player.purple,
    black: player.black,
    white: player.white,
    armada0: player.armada0,
    armada1: player.armada1,
  }));

  const scoreTypes = Object.keys(stackedBarChart[0]).filter(key => key !== "name");

  return (
    <Mat.ThemeProvider theme={props.theme}>
      <Mat.CssBaseline />

      {/* Backdrop */}
      <Mat.Backdrop open={pageLoading}>
        <Mat.CircularProgress color="inherit" />
      </Mat.Backdrop>

      {/* Charts */}
      <Mat.Box display="flex" flexDirection="column" alignItems="center">
        <Mat.Typography variant="h6" gutterBottom>
          {Dic.String.chart_scores_per_player_per_category[lang]}
        </Mat.Typography>
      </Mat.Box>
      <Chart.ResponsiveContainer width="100%" height={420}>
        <Chart.BarChart data={stackedBarChart}>
          <Chart.CartesianGrid strokeDasharray="3 3" />
          <Chart.XAxis dataKey="name" />
          <Chart.YAxis />
          <Chart.Legend
            formatter={(value, entry) => Dic.String[`label_${entry.value}`][lang]}
          />
          {scoreTypes.map((scoreType, index) => (
            <Chart.Bar key={index} dataKey={scoreType} stackId="stack" fill={generateScoreColor(index)} />
          ))}
        </Chart.BarChart>
      </Chart.ResponsiveContainer>
      <Mat.Divider variant="middle" />

      <Mat.Box display="flex" flexDirection="column" alignItems="center">
        <Mat.Typography variant="h6" gutterBottom>
          {Dic.String.chart_sum_scores_per_player[lang]}
        </Mat.Typography>
      </Mat.Box>
      <Chart.ResponsiveContainer width="100%" height={240}>
        <Chart.PieChart>
          <Chart.Pie
            dataKey="value"
            data={sumPieChart}
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={60}
            paddingAngle={5}
            label={({ name, value }) => `${name}: ${value}`}
          >
            {sumPieChart.map((entry, index) => (
              <Chart.Cell
                key={`cell-${index}`}
                fill={generatePlayerColor(index)}
                stroke="none"
              />
            ))}
          </Chart.Pie>
        </Chart.PieChart>
      </Chart.ResponsiveContainer>
      <Mat.Divider variant="middle" />

      <Mat.Box display="flex" flexDirection="column" alignItems="center">
        <Mat.Typography variant="h6" gutterBottom>
          {Dic.String.chart_daynight_percentage[lang]}
        </Mat.Typography>
      </Mat.Box>
      <Chart.ResponsiveContainer width="100%" height={240}>
        <Chart.PieChart>
          <Chart.Pie
            dataKey="value"
            data={modePieChart}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label={({ name }) => name}
            labelLine={false}
          >
            <Chart.Cell fill="#FFC107" /> {/* Day */}
            <Chart.Cell fill="#3F51B5" /> {/* Night */}
          </Chart.Pie>
        </Chart.PieChart>
      </Chart.ResponsiveContainer>
      <Mat.Divider variant="middle" />

      <Mat.Box display="flex" flexDirection="column" alignItems="center">
        <Mat.Typography variant="h6" gutterBottom>
          {Dic.String.chart_self_scores_per_category[lang]}
        </Mat.Typography>
      </Mat.Box>
      {playerScore ? (
        <Chart.ResponsiveContainer width="100%" height={240}>
          <Chart.RadarChart cx="50%" cy="50%" outerRadius={80} data={selfRadarChart}>
            <defs>
              <linearGradient id="radarFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={props.theme.palette.primary.light} stopOpacity={0.8} />
                <stop offset="95%" stopColor={props.theme.palette.primary.main} stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Chart.PolarGrid />
            <Chart.PolarAngleAxis dataKey="name" />
            <Chart.Radar
              name={props.playername}
              dataKey="value"
              stroke={props.theme.palette.primary.light}
              fill="url(#radarFill)"
              fillOpacity={1}
            />
          </Chart.RadarChart>
        </Chart.ResponsiveContainer>
      ) : (<></>)
      }

      {/* App Bar */}
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
          <div style={{ flexGrow: 1 }} />
        </Mat.Toolbar>
      </Mat.AppBar>
      <Mat.Toolbar />
    </Mat.ThemeProvider >
  );
}
