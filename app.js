const express = require("express");
const app = express();
const routes = require("./routes/routes");
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.status(200).json({
    success: "true",
    data: "hello",
  });
});

app.use("/show", routes);

module.exports = app;
