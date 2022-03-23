CREATE DATABASE studentdb
GO

USE studentdb
GO

CREATE TABLE student(
	_id INT IDENTITY(1,1),
	name VARCHAR(100),
	email VARCHAR(100),
	city VARCHAR(100)
)
GO

SELECT * FROM student
GO

INSERT INTO student (name, email, city) VALUES ('Scott', 'scott@ef.com', 'Boston'),
											   ('Adam', 'adam@ef.com', 'Sydney'),
											   ('Tuan', 'tuan@ef.com', 'Vietnam')
GO

UPDATE student SET name ='Scott Desatnick', email='scott.desatnick@ef.com', city='Bengaluru' WHERE _id = 1
GO

INSERT INTO student (name, email, city) VALUES ('sdsd', 'dsdsd@ef.com', 'dsds')
GO

DELETE FROM student WHERE _id =4
GO

SELECT * FROM student WHERE _id =1
GO