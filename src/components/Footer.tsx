import React from 'react';
import '../App.css';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">

                <div className="newsletter-box">
                    <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>先行情報を受け取る</h3>
                    <p style={{ marginBottom: '1rem', color: '#aaa' }}>
                        福袋の販売開始通知や、<br />限定アイテムの情報をいち早くお届けします。
                    </p>
                    <div className="input-group">
                        <input type="email" placeholder="メールアドレス" className="input-field" />
                        <button className="btn btn-primary">登録</button>
                    </div>
                </div>

                <div className="logo" style={{ marginBottom: '2rem' }}>
                    伝統屋 <span>暁</span>
                </div>

                <p style={{ fontSize: '0.8rem', color: '#666' }}>
                    &copy; 2026 Dentoya Akatsuki. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};
