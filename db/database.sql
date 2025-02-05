CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;


CREATE TABLE employees (
id INT(11) NOT NULL AUTO_INCREMENT,
name VARCHAR(45) NOT NULL,
salary INT(5) DEFAULT NULL,
PRIMARY KEY (id)
)

INSERT INTO employees VALUES
    ("Joe",1000),
    ("Pepe",2000),
    ("Luis",4000),
    ("German",9000),