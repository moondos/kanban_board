import React from 'react';
import Input from '../Input/index';
import Button from '../Button/index';
import Block from '../Button/index';
import ListItem from '../ListItem/index';
import Dropdown from '../Dropdown/index';
import addCard_img from "../../img/add-card.svg";
import './index.css';


class Button_dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addCard: true,
            inputValue: '',
            
                       
        }
    }

    onClickBtn = (blockId, cardId) => {
      
        // const {inputValue} = this.state;
        // this.props.AddNewCard(inputValue)
        this.props.onSelect(blockId, cardId)
        this.setState({ 
          
          addCard : !this.state.addCard
        })
 
      }
    
    render() {
        const { addCard } = this.state;
        const { prevBlockId, prevCards } = this.props;
        const prevBlockFull = prevCards.length > 0 ? true : false;
        return (
          <>
                        
                       
            {addCard ? (
            <button className={prevBlockFull ? "block_add active" : "block_add"}
                        disabled={!prevBlockFull} 
                        onClick={() => this.setState({ addCard : !this.state.addCard})}>
                        <img src={addCard_img} alt="+" className="addImage" />
                        Add Row
            </button>

            ) : (
                
                <>
                  <Dropdown
                    prevBlockId = {prevBlockId}
                    prevCards={prevCards}
                    onSelect = {this.onClickBtn}
                  />
                    
                                    
               </>   
            )}
                        
          </>
        )
        };
}

export default Button_dropdown;