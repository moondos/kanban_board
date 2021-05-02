import React from 'react';
import { Link } from "react-router-dom";
import ListItem from '../ListItem/index';
import Button_backlog from '../Button_backlog/index';
import Button_dropdown from '../Button_dropdown';
// import {dataMock} from "../../utils/store"
import './index.css';



class Block extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            
        }
    } 
    

    

    render() {
        
        const { block, addNewCard, prevCards, prevBlockId, onSelect } = this.props;
        return (
            <div className="block">
                <Link className="block_link" to={block.url}>
                    <p>{block.title}</p>
                </Link>
                                
                <div className="block_info">
                    
                    {block.issues.map((todoStr) => {
                        return (
                        <ListItem
                            
                            todoName = {todoStr.name}
                            
                        />
                        );
                    })}
                    {block.title === "Backlog" ? (
                        <Button_backlog
                            
                            addNewCard = {addNewCard}
                        />
                    ): (
                        <>
                        <Button_dropdown
                            prevBlockId = {prevBlockId}
                            prevCards={prevCards}
                            onSelect={onSelect}
                        />
                        </>
                    )}
                                 
                </div>
                
            </div>
            );
        };
}

export default Block;

