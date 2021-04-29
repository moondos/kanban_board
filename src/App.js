import React from 'react';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Block from './components/Block/index';
import Input from './components/Input/index';
import Button from './components/Button/index';
import ListItem from './components/ListItem/index';
import {dataMock} from "./utils/store"
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataMock

    }
  }


  addNewCard = (newCardName) => {
    const {data} = this.state
    const lastId = data[0].issues.length
                ? data[0].issues[data[0].issues.length - 1].id
                : -1;
    
    const newCard = {
        id: lastId + 1,
        name: newCardName
    };

    const newData = [
        {
            ...data[0],
            
            issues: [...data[0].issues, newCard],
        },
        ...data.slice(1),
    ];
    // console.log(newData)
    
    this.setState({
        data: newData
      })
        
  };
  
  moveCard = (blockId, cardId) => {
    const {data} = this.state;
    const cardIndex = parseInt(cardId,10);
    const lastId = data[0].issues.length
                ? data[0].issues[data[0].issues.length - 1].id
                : -1;
    const сard = data[blockId].issues[cardIndex];
    // console.log('block', blockId);
    // console.log('card', cardId);
    
    const newData = [
      ...data.slice(0, blockId),
      {
        ...data[blockId],
        issues: [...data[blockId].issues.slice(0, cardIndex), ...data[blockId].issues.slice(cardIndex+1)],
        
      },
      {
        ...data[blockId+1],
        issues: [...data[blockId+1].issues, сard],
      },
        ...data.slice(blockId+2),
      ];
    // console.log('newData', newData)
  
    this.setState({
        data: newData
        
      })
    
      // console.log('data', data);
  }


  render() {
    
    const { data } = this.state;
    
    return (
      <div className="app">
         
        <Header />
        
        
        <div className="container">
            
            {data.map((block, index) => {
              return (
                <Block 
                  block = {block}
                  addNewCard = {this.addNewCard}
                  prevBlockId = {index-1 ? index-1 : 0}
                  prevCards = {data[index - 1] ? data[index - 1].issues : []}
                  onSelect = {this.moveCard}
                />
              );
            })}
        </div>
        
        <Footer
          data = {data}
        />
      </div>
      
      

    );
  }
}

export default App;
