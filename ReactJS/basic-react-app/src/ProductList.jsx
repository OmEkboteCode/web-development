import ProductCard from "./ProductCard";

export default function ProductList({products}) {
    return (
        <div className="ProductList">
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <ProductCard product={product}/>
                    </div>
                )
            })}
        </div>
    )
}