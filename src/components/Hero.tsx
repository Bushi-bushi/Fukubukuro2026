import React from 'react';
import '../App.css';

interface HeroProps {
    isOnSale: boolean;
    onScrollToLineup: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isOnSale, onScrollToLineup }) => {
    return (
        <section className="hero">
            <div className="hero-bg"></div>
            <div className="hero-content">
                <span className="hero-year">二〇二六 新春福袋</span>
                <h1 className="hero-title">
                    伝統を纏う、<br />
                    一年の始まり。
                </h1>
                <p className="hero-subtitle">
                    未発売新作を必ず封入。<br />
                    すべて数量限定、完全受注生産でお届けする<br />
                    「伝統屋 暁」の特別な贈り物。
                </p>

                <div className="hero-image">
                    <img src="/assets/lucky-bag.png" alt="Traditional Lucky Bag" style={{ width: '100%' }} />
                </div>

                <div>
                    {isOnSale ? (
                        <div className="sale-active-banner">
                            <p style={{ color: 'var(--color-accent)', fontWeight: 'bold', marginBottom: '1rem', fontSize: '1.2rem' }}>
                                【期間：12/15〜12/20】先着順・売切終了
                            </p>
                            <button className="btn btn-primary" onClick={onScrollToLineup}>
                                今すぐ購入する
                            </button>
                        </div>
                    ) : (
                        <div className="pre-sale-banner">
                            <p style={{ marginBottom: '1rem' }}>
                                販売開始：2025年12月15日(月) 12:00〜 <br />
                                <span style={{ fontSize: '0.9rem', color: '#888' }}>※プレミアムは抽選受付となります</span>
                            </p>
                            <button className="btn btn-disabled" disabled>
                                COMING SOON
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
