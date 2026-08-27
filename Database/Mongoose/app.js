const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => console.log(error));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/company_directory");
}

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
    enum: [
      "Technology",
      "Automotive",
      "Electronics",
      "E-commerce",
      "Entertainment",
      "Entertainment & Electronics",
      "Streaming & Entertainment",
      "Legacy Enterprise",
    ],
  },
  country: {
    type: String,
    required: true,
  },
  founded: {
    type: Number,
    required: true,
    min: 1800,
    max: 2026,
  },
  products: {
    type: [String],
  },
  employees: {
    type: Number,
    required: true,
    min: 1,
  },
});

const Company = mongoose.model("Company", companySchema);

// Company.find()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Company.findByIdAndDelete('6a902f7aafe79c3dd89568db')
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));



Company.findByIdAndUpdate('6a8f98e6718b5b431cfe68d1', { employees: -100 },{ new: true, runValidators: true }).then(
  (res) => {
    console.log(res);
  },
).catch((err) => {
    console.log(err.errors.employees);
})

// Your task
// Using Company.findByIdAndUpdate():
// Pick an existing company.
// Try changing its employees to -500.
// First run the update without runValidators.
// Check what happens in MongoDB.
// Then run the same kind of update with:
// { new: true, runValidators: true }
// Catch the error and inspect:
// err.errors
// Then go one level deeper and inspect the specific validation error for employees.