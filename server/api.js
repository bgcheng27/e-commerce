const express = require("express");
const router = express.Router();
const db = require("./db/database");

router.get("/search", async (req, res) => {
  const troll = "Med";
  const result = await db.query(
    `SELECT p.product_id, p.name, p.description, p.price, c.category, u.username \
     FROM products p \
     INNER JOIN users u ON p.user_id = u.user_id \
     INNER JOIN categories c ON p.category_id = c.category_id \
     GROUP BY p.product_id, c.category, u.username \
     HAVING concat_ws(' ', p.name, p.description) LIKE '%${troll}%'`
  )

  res.send(result.rows);
})

module.exports = router;