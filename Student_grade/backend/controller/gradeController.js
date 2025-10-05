const db = require("../config/db");

exports.addGrade = async (req, res) => {
  const { student_id, subject_id, grade } = req.body;
  const sql = `INSERT INTO  grades (student_id , subject_id, grade ) VALUES (?,?,?)`;
  try {
    await db.query(sql, [student_id, subject_id, grade]);
    console.log("Add grade");
    res.status(201).json({
      success: true,
      message: "grade added",
      data: { student_id, subject_id, grade },
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "something went wrong", error });
  }
  await db.query(sql, [student_id, subject_id], grade);
};

exports.updateGrade = async (req, res) => {
  const { grade, student_id, subject_id } = req.body;
  try {
    const sql = `UPDATE grades SET grade = ? WHERE student_id =? AND subject_id =? `;
    await db.query(sql, [grade, student_id, subject_id]);
    res.status(200).json({
      success: true,
      message: "grade updated",
      data: { grade, student_id, subject_id },
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "something went wrong", error });
  }
};

exports.deleteGrade = async (req, res) => {
  const { student_id, subject_id } = req.params;
  const sql = `DELETE FROM grades WHERE student_id = ? AND subject_id = ?`;

  try {
    const [result] = await db.query(sql, [student_id, subject_id]);

    if (!result.affectedRows) {
      return res
        .status(404)
        .json({ success: false, message: "Grade not found" });
    }

    res.status(200).json({ success: true, message: "Grade deleted" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
