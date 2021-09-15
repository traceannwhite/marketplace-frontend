import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product-container">
      <Link to={`/products/${product.id}`} className="product-card">
        <div className="product-img">
          <img src={product.image} alt="book" />
        </div>
        <div className="product-details">
          <h3>{product.name}</h3>
          <h3>{product.seller}</h3>
          <h3>{product.price}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Book;
