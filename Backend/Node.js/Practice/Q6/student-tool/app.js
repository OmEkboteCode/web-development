import { createStudent } from "./utils/index.js";

const argumentName = process.argv[2];
const argumentAge = process.argv[3];

console.log(createStudent(argumentName, argumentAge));
