import React from 'react';
import './index.css';
import Button from '../Button/index';


const ListItem = ({ todoName }) => {
    return (
        <div className="item">
            <div className="item__text">
                {todoName}
            </div>
            
        </div>
    );
};

export default ListItem;