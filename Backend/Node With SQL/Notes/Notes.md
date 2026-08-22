# Node With SQL

## Faker
To generate fake data

- userId username email password

- npm install --save-dev @faker-js/faker

```js
const { faker } = require('@faker-js/faker');

let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

console.log(getRandomUser());
```

## MySQL2 Package
- To connect Node with MySQL

- npm i mysql2

```js
const mysql = require("mysql2")

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test', //We need to have a database created
});

```