import React from 'react';
import './App.css';
import {Minion, Wolf, Robber, Insomniac, Mason, Seer, TroubleMaker} from './Cards.js';

class GameType extends React.Component{
  constructor(props){
    super(props);
    this.state = {isOn:true};
    this.toggleGame = this.toggleGame.bind(this);
  }
  toggleGame(){
    const isOn = this.state.isOn === true ? false : true;
    this.setState({isOn:isOn});
  }
  render(){
    if(this.state.isOn === true){
      return(
        <div className ="GameOn">
          <button onClick={this.toggleGame}>Work</button>
          <Wolf />
          <Minion />
          <Seer />
          <Robber />
          <TroubleMaker />
          <Mason />
          <Insomniac />
        </div>
      )
    }else{
    return (
      <div className="GameType">
        <button onClick={this.toggleGame}>One Night Ultimate</button>
      </div>)
    }
  }
}


export default GameType;
