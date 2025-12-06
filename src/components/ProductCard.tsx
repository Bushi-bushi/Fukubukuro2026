import React, { useState, useEffect } from 'react';
import type { Product } from '../data/products';
import '../App.css';

interface ProductCardProps {
    product: Product;
    isOnSale: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, isOnSale }) => {
    const [remaining, setRemaining] = useState(product.limit);

    // Simulate remaining count logic for "On Sale" mode
    useEffect(() => {
        if (isOnSale && !product.isPremium) {
            // Mock remaining count: slightly less than limit
            const mockRemaining = Math.max(1, Math.floor(product.limit * 0.4));
            setRemaining(mockRemaining);
        }
    }, [isOnSale, product.limit, product.isPremium]);

    const isSoldOut = remaining === 0;

    return (
        <div className={`product-card ${product.isPremium ? 'premium' : ''}`}>
            {product.isPremium && <div className="card-badge">抽選販売・限定1個</div>}
            {isOnSale && !product.isPremium && !isSoldOut && (
                <div className="card-badge" style={{ background: 'var(--color-accent)' }}>残り {remaining} 個</div>
            )}

            <div>
                <h3 className="card-title">{product.name}</h3>
                <p className="card-target">{product.target}</p>

                <div className="card-price">
                    {product.price.toLocaleString()}円 <span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>(税込)</span>
                </div>

                <div className="total-value-box">
                    <p className="total-value-text">中身総額 {product.totalValue.toLocaleString()}円 相当</p>
                </div>

                <ul className="card-details">
                    {product.description.map((desc, i) => (
                        <li key={i}>
                            <span>✦ {desc}</span>
                        </li>
                    ))}
                </ul>

                <div style={{ marginTop: '2rem' }}>
                    {!isOnSale ? (
                        <button className="btn btn-disabled" style={{ width: '100%' }} disabled>
                            COMING SOON
                        </button>
                    ) : (
                        <>
                            {product.isPremium ? (
                                <button className="btn btn-primary" style={{ width: '100%' }}>
                                    抽選に応募する
                                </button>
                            ) : (
                                <button
                                    className={`btn ${isSoldOut ? 'btn-disabled' : 'btn-primary'}`}
                                    style={{ width: '100%' }}
                                    disabled={isSoldOut}
                                >
                                    {isSoldOut ? 'SOLD OUT' : 'カートに入れる'}
                                </button>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
