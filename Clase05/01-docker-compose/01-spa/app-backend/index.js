const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const connection = mysql.createConnection({
  host: process.env["db_host"] || "localhost",
  port: process.env["db_port"] || "4500",
  user: process.env["db_user"] || "user",
  password: process.env["db_password"] || "12345",
  database: process.env["db_database"] || "db",
});

connection.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));

app.get("/", (req, res) => res.send("All's ok"));

app.get("/list", (req, res) => {
  connection.query("select id, name, lastname from user;", (error, results) => {
    if (error) {
      throw error;
    }
    res.json(results);
  });
});

app.post("/add", (req, res) => {
  const { name, lastname } = req.body;
  console.log("body", req.body);
  connection.query(
    "insert into user (name, lastname) values (?,?)",
    [name, lastname],
    (errors, results) => {
      if (errors) throw errors;
      res.send("user inserted");
    }
  );
});

app.get("/create-table", (req, res) => {
  connection.query(
    "create table user (id int not null auto_increment, name varchar(50), lastname varchar(50), primary key (id));",
    function (error, results, fields) {
      if (error) {
        return res.send("Table already exists");
      }
      res.send("Table created");
    }
  );
});

const port = process.env["port"] ? +process.env["port"] : 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
