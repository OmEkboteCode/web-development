import Product from "./Product";

function ProductTab() {
  let styles = { display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "stretch", gap: "15px"};
  return (
    <div style={styles}>
        
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple Stylus(4th gen)" idx={1} />
      <Product title="Zebronics Zeb-Transformer" idx={2} />
      <Product title="Petronics Blanc Mouse" idx={3} />
    </div>
  );
}

export default ProductTab;

// let options =[<li>"Hi-tech"</li>, <li>"Durable"</li>, <li>"Fast"</li>]
// let options1 ={a:"Hi-tech", b:"Durable", c:"Fast"}
