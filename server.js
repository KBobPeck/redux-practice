//*IMPORTS AND ENV */
const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//*DATABASE */
const connectdb = require("./db");
connectdb();

//*INIT MIDDLEWARE */
app.use(express.json({ extended: false }));

//*ROUTES */
app.get("/", (req, res) => {
  res.send("API Running");
});

const currentVersion = "/api/v1";

app.use(`${currentVersion}/auth`, require("./api/auth"));
app.use(`${currentVersion}/posts`, require("./api/posts"));
app.use(`${currentVersion}/profile`, require("./api/profile"));
app.use(`${currentVersion}/users`, require("./api/users"));

//*APP STARTUP */
app.listen(PORT, () => {
  console.log(`Server listening @ ${PORT}`);
});
