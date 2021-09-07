const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require('console.table');
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "",
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);

function whatToDoQestion() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do? ",
        name: "whatToDoList",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
        ],
      },
    ])
    .then((response) => {
      console.log(response);
      if (response.whatToDoList === "View All Employees") {
        
          db.query('SELECT * FROM employee',

     function(err, results) {
     console.log(results);
      });
        console.log("it works");
      }
    });
}

function createDepartment() {
  // inquirer.prompt for department info
  inquirer.prompt([]).then((response) => {
    //THEN INSERT INTO department () values
    db.query(
      `INSERT INTO department (name) VALUES (?)`,
      response.name,
      function (err, response) {
        askUserForAction();
      }
    );
  });
}

function createRole() {
  // Get all existing departments
  db.query(`SELECT`, response.name, function (err, response) {
    inquirer.promt([]);
  }).then((response) => {
    // THEN INSERT INTO department () VALUES
    db.query(`INSERT INTO roles (name) VALUES (?)`, response.name),
      function (err, response) {
        askUserForAction();
      };
  });
}

whatToDoQestion();
