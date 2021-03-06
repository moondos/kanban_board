import React from 'react';
import Input from '../Input/index';
import Button from '../Button/index';

import addCard_img from "../../img/add-card.svg";
import './index.css';


class Button_backlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addCard: true,
            inputValue: '',
           
            
        }
    }

    onChangeInput = (event) => {
      
      this.setState({
        inputValue: event.target.value,
      })
    }
  
    onClickBtn = () => {
      
      const {inputValue} = this.state;
      if (inputValue.trim()) {
        this.props.addNewCard(inputValue)

        this.setState({ 
          inputValue:'',
          addCard : !this.state.addCard
        })
      }
      
    }
    
    

    render() {
        const { addCard, inputValue } = this.state;
        
        return (
          <>
                        
                       
            {addCard ? (
            <button className="backlog_add" onClick={() => this.setState({ addCard : !this.state.addCard})}>
                        <img src={addCard_img} alt="+" className="addImage" />
                        Add Row
            </button>

            ) : (
                <>
                  <Input
                      value = {inputValue}
                      onChange = {this.onChangeInput}
                  />
                  <Button
                    name="Submit"
                    onClick = {this.onClickBtn}
                  />
              
               </>   
            )}
                        
          </>
        )
        };
}

export default Button_backlog;