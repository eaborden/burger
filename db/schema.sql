-- Create the database seinfeld and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table actors.
CREATE TABLE burgers 
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(30) NOT NULL,
devoured boolean default false,
PRIMARY KEY (id)
);