const express = require("express");
const cors = require("cors");
const app = express();

// const schemas = require("./model/schemas");

require("dotenv").config();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

app.use("/students", require("./router/studentRouter"));
app.use("/grades", require("./router/gradeRouter"));
app.use("/subjects", require("./router/subjectRouter"));

const db = require("./config/db");

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`server is running at prot : ${PORT}`);
});
