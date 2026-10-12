import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrice = ["12,496", "20,999", "1,899", "799"];
  let newPrice = ["8,999", "15,999", "999", "449"];
  let description = [
    ["8,000 DPI", "5 Programmable Buttons"], 
    ["Designed For Ipad Pro", "Easy to Use"],
    ["Intuitive Surface", "Compact"],
    ["Wireless", "Rechargeable"]
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0] }</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}></Price>
    </div>
  );
}

export default Product;
