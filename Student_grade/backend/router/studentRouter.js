const { Router } = require("express");
const {
  addStudent,
  getStudents,
  // getStudentsWithSubject,
  getAllStudentsWithGradeAndSubject,
} = require("../controller/studentController");

const router = Router();

router.post("/", addStudent);
router.get("/", getStudents);
// router.get("/details", getStudentsWithSubject);
router.get("/alldetails", getAllStudentsWithGradeAndSubject);

module.exports = router;
