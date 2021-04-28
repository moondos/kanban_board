import React from 'react';
import Menu from '../Menu/index';
import './index.css';
import userAvatar from "../../img/user-avatar.svg";
import arrowDown from "../../img/arrow-down.svg";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            menuState: false,
        }
    }
    
    
    render() {
    // const {value, onChange} = this.props;
    return (
        <div className="header">
            <h1 className="title">Awesome Kanban Board</h1>
            <div className="user-menu" onClick={() => this.setState({ menuState : !this.state.menuState})}>
                <img
                    src={userAvatar}
                    alt="avatar"
                />
                <img src={arrowDown} alt="v"/>
                {this.state.menuState && <Menu />}
            </div>
            
                    
        </div>
        );
    };
}

export default Header;

