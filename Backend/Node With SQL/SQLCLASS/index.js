const { faker } = require('@faker-js/faker');
const mysql = require("mysql2")

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
});


let createRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

console.log(createRandomUser());