import { pool } from "../../db.js";

export const pingPong = async (req, res) => {
    const [RESULT] = await pool.query("SELECT 1+1 AS TOTAL");
    res.send(RESULT)
}