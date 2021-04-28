import React from 'react';
import './index.css';
import arrowDropDown, { ReactComponent } from "../../img/arrow-drop-down.svg";

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listOpen : false,
                                   
        }
    }

    render () {
        const {prevBlockId, prevCards, onSelect} = this.props
        return (
            <>
                <select className="selector" onChange={(event) => onSelect(prevBlockId,event.target.value)}>
                    
                    <option disabled selected hidden>Choose issue</option>
                    {prevCards.map((card, index) => (
                        <option value={index} key={index}>
                        {card.name}
                        </option>
                    ))}
                    
                </select>
                            
                        
                        
                
                
            </>
        );
    };


    }


    
   

export default Dropdown;