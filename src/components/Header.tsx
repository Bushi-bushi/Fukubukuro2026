import React from 'react';
import '../App.css';

export const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    伝統屋 <span>暁</span>
                </div>
                <nav>
                    {/* Simple nav if needed, or just social links */}
                </nav>
            </div>
        </header>
    );
};
