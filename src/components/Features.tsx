import React from 'react';
import '../App.css';

export const Features: React.FC = () => {
    return (
        <section className="py-16" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="container">
                <h2 className="section-title">暁のお約束</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <div className="feature-icon">✦</div>
                        <h3 className="feature-title">未発売新作を封入</h3>
                        <p className="feature-desc">
                            この福袋でしか手に入らない、<br />あるいは一般発売前の新作が<br />必ず1点含まれます。
                        </p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">↺</div>
                        <h3 className="feature-title">安心の交換保証</h3>
                        <p className="feature-desc">
                            色味や、ピアス・イヤリングのタイプが<br />合わない場合、1回に限り<br />無償で交換対応いたします。
                        </p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">⚒</div>
                        <h3 className="feature-title">完全受注生産</h3>
                        <p className="feature-desc">
                            ご注文をいただいてから、<br />職人が一つひとつ丁寧に仕上げます。<br />お届けまで約30日お待ちください。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
