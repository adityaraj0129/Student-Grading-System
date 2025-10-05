const { Router } = require("express");
const {
  addGrade,
  updateGrade,
  deleteGrade,
} = require("../controller/gradeController");

const router = Router();

router.post("/", addGrade);
router.delete("/:student_id/:subject_id", deleteGrade);
router.put("/update", updateGrade);

module.exports = router;
