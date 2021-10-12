const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
require('dotenv').config();

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: process.env.DB_PASSWORD,
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
        viewAllEmployees();
      } else if (response.whatToDoList === "Add Employee") {
        addEmployee();
      } else if (response.whatToDoList === "Update Employee Role") {
        updateEmployeeRole();
      } else if (response.whatToDoList === "View All Roles") {
        viewAllRoles();
      } else if (response.whatToDoList === "Add Role") {
        addRole();
      } else if (response.whatToDoList === "View All Departments") {
        viewAllDepartments();
      } else if (response.whatToDoList === "Add Department") {
        addDepartment();
      }
    });
}

function viewAllEmployees() {
  db.query("SELECT * FROM employee", function (err, results) {
    console.log(results);
    inquirer
      .prompt([
        {
          type: "list",
          message: "What would you like to do? ",
          name: "return",
          choices: ["return", "end"],
        },
      ])
      .then((response) => {
        console.log(response);
        if (response.return === "return") {
          return whatToDoQestion();
        } else if (response.return === "end") {
          return "hold CTRL+C";
        }
      });
  });
  console.log(" it works = view all employee's ");
}

function addEmployee() {
  console.log("add employee ");

  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do? ",
        name: "whatToDoList",
        choices: [currentEmployees],
      },
      {
        type: "input",
        message: "Please Enter the First Name of Employee?",
        name: "first_name",
      },

      {
        type: "input",
        message: "Please Enter the Last Name of Employee?",
        name: "last_name",
      },
      {
        type: "input",
        message: "Please Enter the Role of Employee?",
        name: "role",
      },
    ])
    .then((response) => {
      console.log("insert add employee query function");
      //THEN INSERT INTO department () values
      db.query(`INSERT INTO employee (name) VALUES (?)`, response.name);
    });
  console.log("add employee end of function ");
}

function updateEmployeeRole() {
  db.query("SELECT first_name FROM employee", function (err, results) {
    db.query("SELECT title FROM roles", function (err, roleResults) {
      inquirer
        .prompt([
          {
            type: "list",
            message: "pick employee to update? ",
            name: "updateRole",
            choices: results.map(function (person) {
              return person.first_name;
            }),
          },

          {
            type: "list",
            message: "What new role is this employee? ",
            name: "newRole",
            choices: roleResults.map(function (roles) {
              return roles.title;
            }),
          },
        ])
        .then((response) => {
          console.log(response.newRole + "000000");
          db.query(
            `SELECT * FROM roles WHERE title = ${response.newRole}`,
            function (err, roleId) {
              console.log(roleId, err);
            }
          );
          // db.query(
          //   `UPDATE employee SET roles_id = ${response.newRole} WHERE first_name = ${response.updateRole}`,
          //   function (err, res) {
          //     console.log(err, res);
          //   }
          // );
        });
    });
  });

  console.log("update employee Role");
}

function viewAllRoles() {
  console.log("view all Roles");
  db.query("SELECT title FROM roles", function (err, results) {
    console.log(results);
    inquirer
      .prompt([
        {
          type: "list",
          message: "What would you like to do? ",
          name: "return",
          choices: ["return", "end"],
        },
      ])
      .then((response) => {
        console.log(response);
        if (response.return === "return") {
          return whatToDoQestion();
        } else if (response.return === "end") {
          return "hold CTRL+C";
        }
      });
  });
}

function addRole() {
  console.log("add Role");
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please Enter the Title of Role?",
        name: "title",
      },
    ])
    .then((response) => {
      db.query(``), response.department_name;
    });
}

function viewAllDepartments() {
  console.log("view all Departments");
  db.query("SELECT department_name FROM department", function (err, results) {
    console.log(results);
    inquirer
      .prompt([
        {
          type: "list",
          message: "What would you like to do? ",
          name: "return",
          choices: ["return", "end"],
        },
      ])
      .then((response) => {
        console.log(response);
        if (response.return === "return") {
          return whatToDoQestion();
        } else if (response.return === "end") {
          return "hold CTRL+C";
        }
      });
  });
}

function addDepartment() {
  console.log("add Department ");
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please Enter the Name of Department?",
        name: "department_name",
      },
    ])
    .then((response) => {
      db.query(
        `UPDATE employee SET roles_id = ${response.newRole} WHERE first_name = ${response.updateName}`,
        function (err, res) {
          console.log(err, res);
        }
      );
    });
}

// function createDepartment() {
//   // inquirer.prompt for department info
//   inquirer.prompt([]).then((response) => {
//     //THEN INSERT INTO department () values
//     db.query(
//       `INSERT INTO department (name) VALUES (?)`,
//       response.name,
//       function (err, response) {
//         askUserForAction();
//       }
//     );
//   });
// }

// function createRole() {
//   // Get all existing departments
//   db.query(`SELECT`, response.name, function (err, response) {
//     inquirer.promt([]);
//   }).then((response) => {
//     // THEN INSERT INTO department () VALUES
//     db.query(`INSERT INTO roles (name) VALUES (?)`, response.name),
//       function (err, response) {
//         askUserForAction();
//       };
//   });
// }

whatToDoQestion();
