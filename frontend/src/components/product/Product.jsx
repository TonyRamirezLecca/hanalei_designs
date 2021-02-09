import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "../misc/";

export default function Product({ product }) {
    return (
        <div>
            <div className="card">
                <img className="medium" src={product.image} alt={product.name} />
                <div className="card-body">
                    <Link to={`/product/${product._id}`}>
                        <h2>{product.name}</h2>
                        <Rating rating={product.rating} numReviews={product.numReviews} />
                        <div className="price">{product.price}</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
