const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 25,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [100, "Price is too low for Amazon Selling"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
  genre: [String],
});
const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("6a8f0ed6e15cf7f475e022d2", { price: -100 }, {runValidators: true}).then(
  (res) => {
    console.log(res);
  },
).catch((err) => {
    console.log(err.errors.price.properties.message);
})

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
