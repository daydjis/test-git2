import React from 'react';
import classes from "./Header.css";

function MainHeader(props) {
    return (
        <div>
            <nav className="header">
                <div className="header_items">
                    <a href="#" className="HeaderItem">Главная</a>
                    <a href="#" className="HeaderItem">Новости</a>
                    <a href="#" className="HeaderItem">Задачи</a>
                    <a href="#" className="HeaderItem">О Проекте</a>
                </div>
            </nav>
        </div>
    );
}

export default MainHeader;