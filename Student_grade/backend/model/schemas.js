const db = require("../config/db");

//create student table-------------------------------------------
(async () => {
  const sql = `CREATE TABLE Students(
        id INT PRIMARY KEY AUTO_INCREMENT,
        Roll_no INT NOT NULL UNIQUE,
        Name VARCHAR(100) NOT NULL ,
        Attendence INT NOT NULL
    )`;
  try {
    await db.query(sql);
    console.log("Student table created");
  } catch (error) {
    console.log(error);
  }
})();
//create subject table------------------------------------------
(async () => {
  const sql = ` CREATE TABLE IF NOT EXISTS subjects (
      id INT AUTO_INCREMENT PRIMARY KEY,
      subject VARCHAR(50) NOT NULL UNIQUE
)`;
  try {
    await db.query(sql);
    console.log("Subject table created");
  } catch (error) {
    console.log(error);
  }
})();
(async () => {
     //! create grade table------------------------------------------
  const sql = `CREATE TABLE IF NOT EXISTS grades(
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  subject_id INT NOT NULL,
  grade INT NOT NULL,
  FOREIGN KEY (student_id) REFERENCES students(Roll_no) ON DELETE CASCADE,
  FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE CASCADE) `;
  try {
    await db.query(sql);
    console.log("Grade table created");
  } catch (error) {
    console.log(error);
  }
})();
