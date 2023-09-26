const express = require("express");
const db = require("./db/database");
const app = express();
const apiRouter = require("./api");
const cors = require("cors");

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors({
  origin: "http://localhost:5173",
}))


app.get("/", async (req, res) => {
    // error check soon
    const data = await db.query(`SELECT prod.product_id, prod.user_id, prod.name, prod.description, prod.price, u.username, cat.category 
      FROM products prod
      INNER JOIN users u ON prod.user_id = u.user_id
      INNER JOIN categories cat ON prod.category_id = cat.category_id`)
    res.send(data.rows)
})

app.use("/api", apiRouter);

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})