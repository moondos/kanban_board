import React from 'react';
import './index.css';


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