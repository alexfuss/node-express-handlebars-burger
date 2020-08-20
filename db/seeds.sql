-- Select burgers_db
USE `burgers_db`;

-- insert 3 burgers
INSERT INTO `burgers` (burger_name, devoured, date) VALUES ('Angus', false, CURRENT_TIMESTAMP);
INSERT INTO `burgers` (burger_name, devoured, date) VALUES ('Bacon Cheese', false, CURRENT_TIMESTAMP);
INSERT INTO `burgers` (burger_name, devoured, date) VALUES ('Swiss Mushroom', false, CURRENT_TIMESTAMP);