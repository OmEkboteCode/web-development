import "./App.css";
import ProductList from "./ProductList";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    rating: 4.2,
    inStock: true,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 89.99,
    rating: 4.6,
    inStock: true,
  },
  {
    id: 3,
    name: "Laptop",
    price: 799.99,
    rating: 4.8,
    inStock: false,
  },
  {
    id: 4,
    name: "Wireless Mouse",
    price: 24.99,
    rating: 4.0,
    inStock: true,
  },
];

function App() {
  return (
    <>
      <ProductList products={products}/>
    </>
  );
}

export default App;
