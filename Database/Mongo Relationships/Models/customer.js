const mongoose = require("mongoose");
const { Schema } = mongoose;
main()
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {

let result = await Customer.find({}).populate("orders");
console.log(result[0])
};
addCustomer();

// const addOrders = async () => {
//   let result = await Order.insertMany([
//     { item: "Samosa", price: 15 },
//     { item: "Chips", price: 20 },
//     { item: "Chocolate", price: 50 },
//   ]);
//   console.log(result);
// };

// addOrders();
