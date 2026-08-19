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