const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "29082002",
  database: "student_grade",
});

(async () => {
  try {
    let connection = await db.getConnection();
    console.log("Database connected");
    connection.release();
  } catch (error) {
    console.log(error);
  }
})();

module.exports = db;
