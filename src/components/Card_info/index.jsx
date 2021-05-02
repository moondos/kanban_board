import React from 'react';
import './index.css';
import Button from '../Button/index';


class Card_info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            
        }
    } 
    
    render() {
        // const { list } = this.state;
        const { card, cardId, blockId, deleteCard } = this.props;
         
        return (
            <div className="card_detail">
                <h2 className="subtitle">{card.name}</h2>
                <div className="createTime">Created: {card.createTime}</div>
                <div className="card_body">{card.body}</div>                 
                
                <Button
                    name="Edit"
                    // onClick = {this.onClickBtn}
                    customClass = "btn_card"

                />
                {/* <Button
                    name="Delete issue"
                    onClick = {deleteCard}
                    customClass = "btn_card"
                /> */}

                <button
                    className="btn_card"
                    onClick={() => deleteCard(blockId, cardId)}
                >
                    Delete issue
                </button>

            </div>
            );
        };
}

export default Card_info;

