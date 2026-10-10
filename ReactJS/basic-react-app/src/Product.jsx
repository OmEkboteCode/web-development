import "./Product.css"

function Product({title, price, features, }) {
    const list = features.map((feature) => <li>{feature}</li>)
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h5>Price: {price}</h5>
      <h5>Features: {list}</h5>
    </div>
  );
}

export default Product;
