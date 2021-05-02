import React from 'react';
import { Link, withRouter } from "react-router-dom";
import Card_info from '../Card_info/index';

// import {dataMock} from "../../utils/store"
import './index.css';



class Block_info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            
        }
    } 
    
    render() {
        // const { list } = this.state;
        const { data, location, deleteCard } = this.props;
        const block = data.find((block) => block.url === location.pathname);
        return (
            <div className="block_detail">
                <div className="bd_title">{block.title}</div>
                <div className="bd_container">
                    {block.issues.map((card, index) => (
                        <Card_info
                            blockId = {block.id}
                            card={card}
                            cardId={index}
                            deleteCard = {deleteCard}
                            // cardName={currentTask.name}
                            // key={issue.id}
                            // changeIssueBody={changeIssueBody}
                            // deleteIssue={deleteIssue}
                        />
                    ))}
                </div>
                <Link className="btn_close" to="/"></Link>    
            </div>
            );
        };
}

export default withRouter(Block_info);

