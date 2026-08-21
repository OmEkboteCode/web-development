CREATE DATABASE x_app;


USE x_app;

CREATE TABLE X_users(
	id INT PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    age INT
);


INSERT INTO X_users
(id, username, email, age)
VALUES 
(1, "Om", "om@example.com", 18),
(2, "Alice", "alice@example.com", 20),
(3, "Alex", "alex@gmail.com", 21);

INSERT INTO X_users
(id, username, email, age)
VALUES
(4, "Ricky", "ricky@example.com", 16),
(5, "Casey", "casey@example.com", 22),
(6, "Duke", "duke@example.com", 25),
(7, "Eve", "eve@example.com", 19),
(8, "Farah", "farah@example.com", 30);

INSERT INTO X_users
(id, username, email, age)
VALUES
(9, "Grace", "grace@example.com", 18),
(10, "Harry", "harry@example.com", 20),
(11, "Ivy", "ivy@example.com", 18);


CREATE TABLE posts(
	id INT PRIMARY KEY,
    content VARCHAR(100) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) references X_users(id)
);

USE x_app;

SELECT username, age
FROM X_users
WHERE age >18 AND age < 21;

SELECT username, age
FROM X_users
WHERE age = 18 OR age = 21;

SELECT username, age
FROM X_users
WHERE age IN (18, 20, 21);

SELECT username, age
FROM X_users
WHERE age BETWEEN 18 AND 21;


SELECT username, email, age
FROM X_users
WHERE age >= 18
LIMIT 2;

SELECT username, email, age
FROM X_users
ORDER BY age ASC;

SELECT username, email, age
FROM X_users
ORDER BY age DESC;

SELECT count(age)
FROM X_users;

SELECT max(age)
FROM X_users;

SELECT min(age)
FROM X_users;

SELECT sum(age)
FROM X_users;

SELECT avg(age)
FROM X_users;

SELECT age, count(age)
FROM X_users
GROUP BY age
HAVING count(age) > 1;

SELECT age, max(age)
FROM X_users
GROUP BY age;

SELECT age
FROM X_users
GROUP BY age
HAVING max(age) > 18
ORDER BY age DESC;


UPDATE X_users
SET age = 19
WHERE username = "Om";

UPDATE X_users
SET age = age + 1;

DELETE FROM X_users
WHERE username = "Alex";

ALTER TABLE X_users
ADD COLUMN city VARCHAR(30) DEFAULT "Bay Lands";


ALTER TABLE X_users
DROP COLUMN city;

ALTER TABLE X_users
RENAME COLUMN username TO handle;

ALTER TABLE X_users
CHANGE COLUMN username handle VARCHAR(30) NOT NULL;

ALTER TABLE X_users
MODIFY handle VARCHAR(50) NOT NULL;

TRUNCATE TABLE X_users;

SELECT * FROM X_users;



INSERT INTO posts
(id, content, user_id)
VALUES
(1, "Starting my journey", 1),
(2, "SQL is getting interesting", 2),
(3, "Building my X app", 1);




CREATE TABLE users (
	id INT PRIMARY KEY,
    age int,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT,
    following INT
);
    


INSERT INTO users
(id, age, username, email, followers, following)
VALUES
(1, 14, "adam", "adam@yahoo.in", 123, 145),
(2, 15, "bob", "bob123@gmail.com", 200, 200),
(3, 16, "casey", "casey@email.com", 300, 306),
(4, 17, "donald", "donald@gmail.com", 200, 105);

INSERT INTO users
(id, age, username, email, followers, following)
VALUES
(5, 14, "eve", "eve@yahoo.in", 503, 14),
(6, 18, "farah", "farah123@gmail.com", 10200, 200);

INSERT INTO users
(id, username, email, following)
VALUES
(7, "elon", "elon@yahoo.in", 120);

ALTER TABLE users
ADD COLUMN city VARCHAR(25) DEFAULT "Bay Lands";

ALTER TABLE users
DROP COLUMN city;

ALTER TABLE instaUsers
RENAME TO users;

SELECT * FROM users;

ALTER TABLE users
CHANGE COLUMN followers subscribers INT DEFAULT 0;

ALTER TABLE users
MODIFY subscribers INT DEFAULT 5;

SET SQL_SAFE_UPDATES = 0;

TRUNCATE TABLE users;



SELECT username, age, followers
FROM users
WHERE email IN ("bob123@gmail.com", "donald@gmail.com", "abcgmail.com");



SELECT username, age, followers, email
FROM users
ORDER BY followers DESC;


SELECT avg(age)
FROM users
WHERE age = 14;


SELECT age, max(followers)
FROM users
GROUP BY age
HAVING max(followers) >200
ORDER BY age DESC;


DELETE FROM users
WHERE age = 15;

SELECT * FROM users;



CREATE DATABASE IF NOT EXISTS Stanford;

USE stanford;

CREATE TABLE teacher (
	id INT PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    subject VARCHAR(40),
    salary INT DEFAULT 25000
);

INSERT INTO teacher
(id, name, subject, salary)
VALUES
(23, "Richard", "Math", 80000),
(47, "Keven", "English", 60000),
(19, "John", "Chemistry", 70000),
(9, "Grace", "Physics", 70000);

SELECT * FROM teacher;



SELECT *
FROM teacher
WHERE salary> 70000;

ALTER TABLE teacher
CHANGE COLUMN salary ctc INT;

UPDATE teacher
SET ctc = ctc + ctc*25/100;

ALTER TABLE teacher
ADD COLUMN city VARCHAR(30) DEFAULT "Bay Lands";

ALTER TABLE teacher
DROP COLUMN ctc;


CREATE TABLE student (
	roll_no INT PRIMARY KEY,
    name VARCHAR(40) UNIQUE,
    city VARCHAR(40),
    marks INT
);

INSERT INTO student
(roll_no, name, city, marks)
VALUES
(110, "Adam", "Bay Lands", 79),
(108, "Ricky", "California", 98),
(112, "Casey", "New York", 94),
(101, "Duke", "Palo Alta", 99);


SELECT * FROM student;

SELECT *
FROM student
WHERE marks>80;

SELECT name, city
FROM student;

SELECT DISTINCT city
FROM student;

SELECT city
FROM student
GROUP BY city;

SELECT *
FROM student
WHERE marks>80;

SELECT city, max(marks)
FROM student
GROUP BY city;

SELECT avg(marks)
FROM student;


ALTER TABLE student
ADD COLUMN grade VARCHAR(2);

UPDATE student
SET grade = "O"
WHERE marks > 95;

UPDATE student
SET grade = "A"
WHERE marks >= 85 AND marks < 95;

UPDATE student
SET grade = "B"
WHERE marks < 85 AND marks >=75;