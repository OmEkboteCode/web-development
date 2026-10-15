export default function ProductCard({product}){
    return (
        <div className="ProductCard">
            <h3>{product.name}</h3>
            <h2>${product.price}</h2>
            <h4>{product.inStock ? "In Stock" : "Out of Stock"}</h4>
            <p>{product.rating}</p>
        </div>
    )
}