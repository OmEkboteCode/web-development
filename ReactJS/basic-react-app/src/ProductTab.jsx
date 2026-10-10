import Product from "./Product";

function ProductTab() {
    let options =["Hi-tech", "Durable", "Fast"]
        // let options =[<li>"Hi-tech"</li>, <li>"Durable"</li>, <li>"Fast"</li>]
    // let options1 ={a:"Hi-tech", b:"Durable", c:"Fast"}
  return (
    <>
      <Product title="Phone" price={30000} features={options}/>
      {/* <Product title="Laptop" price={80000}/>
      <Product title="Pen" price={10}/> */}
    </>
  );
}

export default ProductTab;
