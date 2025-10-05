const db = require("../config/db");
const { Router } = require("express");

const router = Router();

router.get("/", async (req, res) => {
  const sql = `SELECT * FROM subjects`;
  try {
    let [rows] = await db.query(sql);
    res
      .status(200)
      .json({ success: true, message: "Fetched all subject", rows });
  } catch (error) {}
});

module.exports = router;
