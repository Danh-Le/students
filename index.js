const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const studentsRoute = require("./routes/students");

app.use(cors());
app.use(express.json());
app.use("/students", studentsRoute);

app.listen(port, () => {
  console.log("Server started on port: " + port);
});
