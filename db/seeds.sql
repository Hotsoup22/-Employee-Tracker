
USE employee_db
INSERT INTO department (department_name)
VALUES ("production/department1"),
       ("service/department2"),
       ("marketing/department3"),
       ("sales/department4"),
       ("department5");

INSERT INTO roles( title, salary)
VALUES ( "manager", 100.00),       
       ( "employee", 75.00),  
       ( "Intern", 50.00);
       

INSERT INTO employee ( first_name, last_name)
VALUES ( "jose","diaz"),
       ( "joe","doe"),
       ( "bobby","hill"),
       ( "hank", "hill");



-- USE employee_db;
-- INSERT INTO department ( department_name)
-- VALUES ( "department1"),
--        ("department2"),
--        ( "department3"),
--        ( "department4"),
--        ( "department5");

-- INSERT INTO roles( title, salary )
-- VALUES ( "manager", 100),       
--        ("employee", 75),  
--        ( "Intern", 50);
       

-- INSERT INTO employee ( first_name, last_name, roles_id )
-- VALUES ( "jose","diaz",1),
--        ( "joe","doe",3),
--        ( "bobby","hill",3 ),
--        ( "hank", "hill",1),
--        ("Wilhelm", "Scream",2);
