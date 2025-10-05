const db = require("../config/db");

exports.addStudent = async (req, res) => {
  const { Name, Roll_no } = req.body;
  const sql = `INSERT INTO Students ( Name , Roll_no,Attendence ) VALUES (?,?,?)`;
  try {
    await db.query(sql, [Name, Roll_no, 1]);
    console.log("student added");
    res.status(201).json({ success: true, message: "student added", Name });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Student already exists", error });
  }
};

exports.getStudents = async (req, res) => {
  const sql = `SELECT * FROM Students`;
  try {
    const [rows] = await db.query(sql);
    res
      .status(200)
      .json({ success: true, message: "Getting all students", rows });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "something went wrong", error });
  }
};

// exports.getStudentsWithSubject = async (req, res) => {
//   const subjectName = req.body.subject;

//   if (!subjectName) {
//     return res
//       .status(400)
//       .json({ error: "Subject name is required in request body" });
//   }

//   const sql = `
//     SELECT
//       s.Roll_no,
//       s.Name,
//       sub.subject,
//       g.grade
//     FROM
//       students s
//     JOIN
//       grades g ON s.Roll_no = g.student_id
//     JOIN
//       subjects sub ON g.subject_id = sub.id
//     WHERE
//       sub.subject = ?
//   `;

//   try {
//     const [results] = await db.query(sql, [subjectName]);
//     res.json(results);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

exports.getAllStudentsWithGradeAndSubject = async (req, res) => {
  const sql = `SELECT s.Name,s.Roll_no,sub.subject,sub.id,g.grade FROM Students s JOIN grades g ON g.student_id = s.Roll_no JOIN subjects sub ON g.subject_id = sub.id `;
  let [rows] = await db.query(sql);
  res
    .status(200)
    .json({ success: true, message: "getting all students will detail", rows });
};
