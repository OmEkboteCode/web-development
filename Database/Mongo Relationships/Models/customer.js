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

// customerSchema.pre("findOneAndDelete", async () =>{
//   console.log("PRE MIDDLEWARE")
// })
customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const findCustomer = async () => {
  let result = await Customer.find({}).populate("orders");
};

const addCustomer = async () => {
  let newCustomer = new Customer({
    name: "Draven",
  });

  let newOrder = new Order({
    item: "Burger",
    price: 200,
  });
  newCustomer.orders.push(newOrder);

  await newOrder.save();
  await newCustomer.save();

  console.log("Added New Customer");
};

const delCus = async () => {
  let data = await Customer.findByIdAndDelete('6aa610817733435d6fabe9f2');
  console.log(data);
};

// addCustomer();
delCus();
