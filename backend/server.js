const express = require("express");
const bodyParser = require("body-parser");

const { pool } = require("./db");

const app = express();
app.use(bodyParser.json());

pool.query(
  `CREATE TABLE lists (
    id INTEGER AUTO_INCREMENT,
    value TEXT
    PRIMARY KEY (id)
);`,
  (error, results, field) => {
    console.log("results:", results);
  }
);

app.get("/api/values", (req, res) => {
  pool.query("SELECT * FROM lists;", (error, results, fields) => {
    if (error) {
      console.error(error);
      return res.status(500).send(error);
    }

    return res.json(results);
  });
});

app.post("/api/value", (req, res) => {
  console.log("req.body", req.body.value);
  pool.query(
    `INSERT INTO lists (value) VALUES("${req.body.value}")`,
    (error, results, fields) => {
      if (error) {
        return res.status(500).send(error);
      }
      return res.json({
        success: true,
        result: { value: req.body.value, id: results.insertId },
      });
    }
  );
});

app.listen(5000, () => {
  console.log("Server is running.");
});
