const app = require("./app");
require("dotenv").config();
const port = process.env.PORT || 3000;
const dbName = process.env.DB_NAME;
const db = require("./DB/Db.config");

app.listen(port, () => {
  console.log(`server started on port ${port}`);
  console.log(`connected to ${dbName} `);
});
