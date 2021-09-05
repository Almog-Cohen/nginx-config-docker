const express = require("express");

const app = express();

const appID = process.env.APPID;

app.get("/", (req, res) => {
  res.send(`Opening app at port : ${appID}`);
});

app.listen(appID, () => console.log(`App is listenting on port ${appID}`));
