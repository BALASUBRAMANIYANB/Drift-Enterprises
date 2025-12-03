"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { products } from "../../data/products";
import { useCart } from "../../components/CartProvider";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function ProductDetailPage({ params }: Props) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  if (!product) {
    notFound();
  }

  return (
    <div className="page-shell product-detail">
      <div className="product-detail-layout">
        <div className="product-detail-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-detail-main">
          <h1>{product.title}</h1>
          <p className="amazon-product-rating" style={{ marginTop: ".35rem" }}>
            {"★".repeat(Math.round(product.rating))}
            <span className="rating-number">{product.rating.toFixed(1)}</span>
          </p>
          <p className="product-detail-price">
            <span className="currency">$</span>
            {product.price.toFixed(2)}
          </p>
          <p className="product-detail-description">{product.description}</p>
        </div>
        <aside className="product-detail-buybox">
          <p className="product-detail-price">
            <span className="currency">$</span>
            {product.price.toFixed(2)}
          </p>
          <p className="text-muted">
            FREE delivery with DRIFT ENTERPRISES Prime. This is a demo experience.
          </p>
          <button
            className="primary-button wide"
            onClick={() => addItem(product)}
          >
            Add to Cart
          </button>
          <button
            className="primary-button wide"
            style={{ marginTop: ".5rem" }}
          >
            Buy now
          </button>
        </aside>
      </div>
      <p style={{ marginTop: "0.75rem", fontSize: ".85rem" }}>
        <Link href="/products" className="amazon-link">
          Back to all products
        </Link>
      </p>
    </div>
  );
}


