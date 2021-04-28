import React from 'react';
import './index.css';

const Menu = () => {
    return (
        <>
             
            <div className="dropdown">
                <div className="rectangle"></div> 
                <ul className="list">
                    <li className="list_item">My account</li>
                    <li className="list_item">My tasks</li>
                    <li className="list_item">Settings</li>
                </ul>
            </div>
        </>
    );
};

export default Menu;