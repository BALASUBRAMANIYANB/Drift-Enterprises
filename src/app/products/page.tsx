import Link from "next/link";
import { products } from "../data/products";

export default function ProductsPage() {
  return (
    <div className="page-shell">
      <h1>All Products</h1>
      <p style={{ marginBottom: "0.75rem", fontSize: ".9rem" }}>
        Browse the full DRIFT ENTERPRISES catalog inspired by Amazon&apos;s layout.
      </p>
      <div className="amazon-product-grid">
        {products.map((product) => (
          <article key={product.id} className="amazon-product-card">
            <div className="amazon-product-image-wrapper">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="amazon-product-info">
              <p className="amazon-product-category">{product.category}</p>
              <h3 className="amazon-product-title">
                <Link href={`/products/${product.id}`}>{product.title}</Link>
              </h3>
              <p className="amazon-product-rating">
                {"★".repeat(Math.round(product.rating))}
                <span className="rating-number">
                  {product.rating.toFixed(1)}
                </span>
              </p>
              <p className="amazon-product-price">
                <span className="currency">$</span>
                {product.price.toFixed(2)}
              </p>
              <Link href={`/products/${product.id}`} className="amazon-link">
                View details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}


