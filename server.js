const express = require("express");
const axios = require("axios");

const app = express();

const header = {
  Authorization: `Basic ${Buffer.from(`${process.env.WAKATIME_API_KEY}`).toString("base64")}`,
};
const DEFAULT_PORT = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/stats/7d", (req, res) => {
  axios
    .get(`https://wakatime.com/api/v1/users/@External72/stats/last_7_days`, header)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/stats/30d", (req, res) => {
  axios
    .get(`https://wakatime.com/api/v1/users/@External72/stats/last_30_days`, header)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/stats/6m", (req, res) => {
  axios
    .get(`https://wakatime.com/api/v1/users/@External72/stats/last_6_months`, header)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/stats/1y", (req, res) => {
  axios
    .get(`https://wakatime.com/api/v1/users/@External72/stats/last_year`, header)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

const PORT = process.env.PORT || DEFAULT_PORT;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
