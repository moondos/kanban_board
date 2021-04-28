import React from 'react';
import './index.css';

const Footer = ({ data }) => {
    return (
        <div className="footer">
            <p>Active tasks: {data[2].issues.length}</p>
            <p>Finished tasks: {data[3].issues.length}</p>
            <p>Kanban board by Aidos Kenessov, 2021</p>
                    
        </div>
    );
};

export default Footer;
