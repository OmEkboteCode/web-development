const mongoose = require("mongoose");
const { Schema } = mongoose;
main()
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const productSchema = new Schema({
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const reviewSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  comment: String,
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
});

const Product = mongoose.model("Product", productSchema);
const Review = mongoose.model("Review", reviewSchema);

const addProduct = async () => {
  const product1 = new Product({
    reviews: [],
  });
  const review1 = new Review({
    rating: 5,
    comment: "Excellent Product!",
  });
  const review2 = new Review({
    rating: 4,
    comment: "Good but could be improved",
  });
  const review3 = new Review({
    rating: 3,
    comment: "Decent",
  });

  await review1.save();
  await review2.save();
  await review3.save();

  review1.product = product1._id;
  review2.product = product1._id;
  review3.product = product1._id;

  await review1.save();
  await review2.save();
  await review3.save();

  product1.reviews.push(review1._id);
  product1.reviews.push(review2._id);
  product1.reviews.push(review3._id);

  let result1 = await product1.save();
  console.log(result1);
  let result2 = await Review.find().populate("product");
  console.log(result2);
};

addProduct();
