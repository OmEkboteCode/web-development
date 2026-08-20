# SQL

## What is a Database?
- Its a collection of data in a format that can be easily accessed.

## Why databases?

- Can store large data
- Features like security, scalability etc.
- Easier to insert, update or delete data.

## SQL vs NoSQL

SQL
<br>
- Relational Database(data stored in Tables(relation))
- eg: MySQL, Oracle, PostgreSQL etc

NoSQL
<br>
- Non Relational Database(data stored in document/key-val/graphs etc.)
- eg: MongoDb, Cassandra, Neo4j etc


## MySQL
Structured Query Language

- SQL is a programming language used to interact with relational databases.


### Table in SQL

MySQL, you must define its columns, data types, and structural rules (constraints) using standard SQL commands. By default, modern MySQL databases use the highly robust InnoDB storage engine to handle these tables.

- Columns: Design or Schema(what type of data is stored)
- Rows: Tuple(a single row, info about a single entity)

## Our 1st Database

- CREATE DATABASE db_name;
- DROP DATABASE db_name; (Delete db)
- USE db_name; (Create table in which db?)


## Our 1st Table

```sql
CREATE TABLE table_name (
    column_name1 datatype contraint,
    column_name2 datatype contraint,
    column_name3 datatype contraint,
);
CREATE TABLE student (
	rollno INT,
    name VARCHAR(30),
    age INT
);

INSERT INTO student
VALUES
(101, "Alex", 12),
(105, "Richard", 15);


SELECT * FROM student;
```

## Database Queries

- CREATE DATABASE db_name
- CREATE DATABASE IF NOT EXIST db_name (like if condition in js)

- DROP DATABASE db_name;
- DROP DATABASE IF EXISTS db_name;

- SHOW DATABASES;
- SHOW TABLES;


## Table Queries

- Create
- Insert
- Update
- Alter
- Truncate
- Delete


### Create Table (schema/columns)

```sql
CREATE TABLE tablename(
    column_name1 datatype constraint,
    column_name2 datatype constraint,
)
```

### Data Types

| DATATYPE  | DESCRIPTION                                                        | USAGE         |
| --------- | ------------------------------------------------------------------ | ------------- |
| `CHAR`    | String (0–255), can store characters of fixed length               | `CHAR(50)`    |
| `VARCHAR` | String (0–65535), can store characters up to given length          | `VARCHAR(50)` |
| `BLOB`    | String (0–65535), can store binary large objects                   | `BLOB(1000)`  |
| `INT`     | Integer (-2,147,483,648 to 2,147,483,647)                          | `INT`         |
| `TINYINT` | Integer (-128 to 127)                                              | `TINYINT`     |
| `BIGINT`  | Integer (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)  | `BIGINT`      |
| `BIT`     | Can store x-bit values. x can range from 1 to 64                   | `BIT(2)`      |
| `FLOAT`   | Decimal number with precision up to 23 digits                      | `FLOAT`       |
| `DOUBLE`  | Decimal number with 24 to 53 digits                                | `DOUBLE`      |
| `BOOLEAN` | Boolean values 0 or 1                                              | `BOOLEAN`     |
| `DATE`    | Date in format of YYYY-MM-DD ranging from 1000-01-01 to 9999-12-31 | `DATE`        |
| `YEAR`    | Year in 4 digits format ranging from 1901 to 2155                  | `YEAR`        |


<i>An UNSIGNED INT in SQL is an integer data type that stores only non-negative values (0 and positive numbers). By removing the capability to store negative numbers, it effectively doubles the maximum positive value that can be stored using the exact same database storage space.</i>

- ex: TINYINT -128 to 127 becomes 1 to 255

### Constraints
Rules for data in the table

- NOT NULL columns cannot have a null value
- UNIQUE all values in column are different
- DEFAULT sets the default value of a column
- CHECK it can limit the values allowed in a column

```sql
CREATE TABLE account (
	id INT,
    age INT, 
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT,
    CONSTRAINT CHECK (age >= 13),
    PRIMARY KEY (id)
);
```

### Key Constraints

1. PRIMARY KEY: Makes a column unique and not null but used only for one(LIke one time use);

```sql
id INT PRIMARY KEY

OR 

PRIMARY KEY (id)

CREATE TABLE temp (
    id int not null,
    PRIMARY KEY (id)
);
```

2. FOREIGN KEY: Prevent actions that would destroy links between tables

```sql
CREATE TABLE temp (
    id int not null,
    FOREIGN KEY (cust_id) references customer(id)
    FOREIGN KEY (t_id) references teacher(id)
);
```

<i>You can check out ER(entity relation) Diagram in reverse engineering</i>


### What are Keys?

- Keys are special columns in the table

1. Primary Key: It is a column (or set of columns) in a table that uniquely identifies each row. (a unique id). There is only 1 PK and it should be NOT null.


2. A foreign key is a column(or set of columns) in a table that refers to the primary key in another table. FKs can have duplicate & null values. There can be multiple FKs.


```sql
CREATE TABLE post (
	id INT,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES account(id)
);
```


### Insert into Table

```sql
INSERT INTO table_name
(colname1, colname2);
VALUES
(col1-v1, col2_v1)
(col1-v2, col2_v2)
```

### Select Command
Selects & Show data from the DB

```sql
SELECT col1, col2 FROM table_name;
SELECT id, name, email FROM account;

SELECT DISTINCT age FROM account;

SELECT * FROM table_name;
```


## Where Clause
To define some conditions


```sql
SELECT col1, coll2 FROM table_name
WHERE conditions;

SELECT name, followers
FROM user
WHERE followers >= 200;
```

### Where Operators

- Arithmetic: +(addition), -(subraction), *(multiplication), /(division), %(modulus)

- Comparison Operators: =(equal to), !+ (not equal to), > , >=, <, <+=

- Logical Operators: AND, OR, NOT, IN, BETWEEN, ALL, LIKE, ANY

- Bitwise Operators: &(Bitwise AND), | (Bitwise OR)


### Frequently Used Operators

- AND(to check for both conditions to be true)

- OR (to check for one of the conditions to be true)

- BETWEEN (selects for a given range)

- IN(matches any value in the list)

- NOT (to negate the given condition)

```sql
INSERT INTO users
(id, age, username, email, followers, following)
VALUES
(1, 14, "adam", "adam@yahoo.in", 123, 145),
(2, 15, "bob", "bob123@gmail.com", 200, 200),
(3, 16, "casey", "casey@email.com", 300, 306),
(4, 17, "donald", "donald@gmail.com", 200, 105);


SELECT username, age, followers
FROM users
WHERE age > 15 AND followers > 200;


SELECT username, age, followers
FROM users
WHERE age BETWEEN 15 AND 17;


SELECT username, age, followers
FROM users
WHERE email IN ("bob123@gmail.com", "donald@gmail.com", "abcgmail.com");


SELECT username, followers, email
FROM users
WHERE age IN (14, 16);

SELECT username, age, followers, email
FROM users
WHERE age NOT IN (14, 16);
```


## Limit Clause
Sets an upper limit on number of(tuples) rows to be returned

```sql

SELECT col1, col2 FROM table_name
LIMIT number;


SELECT username, age, followers, email
FROM users
WHERE age > 14
LIMIT 2;

SELECT username, age, followers, email
FROM users
LIMIT 2;

```

## Order by Clause
To sort in ascending(ASC) or descending order (DESC)

```sql
SELECT col1, col2 FROM table_name
ORDER BY col_name(s) ASC;

SELECT username, age, followers, email
FROM users
ORDER BY followers DESC;


SELECT username, age, followers, email
FROM users
ORDER BY followers ASC;

```


## Aggregate Functions 
Aggregate functions perform a calculation on a set of value. 

- COUNT()
- MAX ()
- MIN()
- SUM ()
- AVG()



Example:

```sql


SELECT max(marks)
FROM student;

```

## Group by Clause
Groups rows that have the same values into summary rows.
<br>
It collects data from multiple records and groups the result by one more column.

```sql
SELECT col1, col2
FROM table_name
GROUP BY col_name(s);

SELECT age, count(id)
FROM users
GROUP BY age;
```

<i>Generally we use group by with some aggregation function</i>


## Having Clause
Similar to Where i.e applies some condition on rows. But it is used when we want to apply any <i>condition after grouping.</i>

```sql
SELECT col1, col2
FROM table_name
GROUP BY col_name(s)
HAVING condition;

SELECT age, max(followers)
FROM users
GROUP BY age
HAVING max(followers) >200;
```

- <i>WHERE is for the table, HAVING is for a group</i>
- <b>Grouping is necessary for having</b>

## General Order

SELECT column(s)
FROM table_name
WHERE condition
GROUP BY column(s)
HAVING condition
ORDER BY column(s) ASC;

```sql
SELECT age, max(followers)
FROM users
GROUP BY age
HAVING max(followers) >200
ORDER BY age DESC;

```

## Table Queries


### Update(to update existing rows)

SET SQL_SAFE_UPDATES = 0;

```sql
SET SQL_SAFE_UPDATES = 0;



UPDATE table_name
SET col1 = val1, col2 = val2
WHERE condition;

```

### Delete(to delete existing rows)

```sql
DELETE FROM table_name
WHERE condition;

```

<b>Dont forget WHERE clause here</b>


### Alter(to change the schema/columns)

ADD Column
```sql
ALTER TABLE table_name
ADD COLUMN column_name datatype constraint;

ALTER TABLE users
ADD COLUMN city VARCHAR(25) DEFAULT "Bay Lands";
```

DROP Column
```sql
ALTER TABLE table_name
DROP COLUMN column_name;

ALTER TABLE users
DROP COLUMN city;
```

RENAME Table
```sql
ALTER TABLE table_name
RENAME TO new_column_name;
```

CHANGE Column(rename)
```sql
ALTER TABLE table_name
CHANGE COLUMN old_name new_name new_datatype new_constrait;

ALTER TABLE users
CHANGE COLUMN followers subscribers INT DEFAULT 0;
```

MODIFY Column(modify datatype/constraint)

```sql
ALTER TABLE table_name
MODIFY col_name new_datatype new_constrait;

```

### Truncate(to delete table's data)

```sql
TRUNCATE TABLE table_name;
```