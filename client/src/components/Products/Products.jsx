import React from 'react';
import {Link} from "react-router-dom";

export default function Products({products}) {
    return (
        <div>
            {products && products.length > 0 ? (
                products.map((product) => (
                    <div key={product.id}>
                        <Link to={`/products/product?id=${product.id}`}>
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </Link>
                        <button>상품 담기</button>
                    </div>
                ))
            ) : (
                <p>상품이 없습니다.</p>
            )}
        </div>
    );
}