import React from 'react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import '../App.css';

interface LineupProps {
    isOnSale: boolean;
}

export const Lineup: React.FC<LineupProps> = ({ isOnSale }) => {
    return (
        <section className="py-16 container" id="lineup">
            <h2 className="section-title">新春 福袋一覧</h2>
            <p className="text-center" style={{ marginBottom: '3rem', color: 'var(--color-text-muted)' }}>
                ご予算や用途に合わせて選べる4つのラインナップ。<br />
                すべてのセットに「未発売新作」が含まれます。
            </p>

            <div className="lineup-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} isOnSale={isOnSale} />
                ))}
            </div>
        </section>
    );
};
