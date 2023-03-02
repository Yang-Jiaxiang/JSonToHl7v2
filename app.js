const testJson = require("./testJson.js");
const Json2Hl7 = require("./JsonToHl7/index.js");
const express = require("express");
const app = express();

const port = 3310;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/smartCard", (req, res) => {
  try {
    console.log(req.body);
    Json2Hl7(testJson);
    res.status(200).json({
      status: "success",
      data: "hello word",
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
