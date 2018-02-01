import React from 'react';
import './App.css';

export class Minion extends React.Component{
  render(){
    return (
      <div className="Minion">
        <img src='/images/minion.jpg' alt="Minion"/>
      </div>
    )
  }
}

export class Wolf extends React.Component{
  render(){
    return (
    <div className="Wolf">
      <img src='/images/wolf.png' alt="Wolf"/>
    </div>
    )
  }
}

export class Robber extends React.Component{
  render(){
    return(
      <div className="Robber">
        <img src='/images/robber.png' alt="Robber" />
      </div>
    )
  }
}

export class Insomniac extends React.Component{
  render(){
    return(
      <div className="Insomniac">
        <img src='/images/insomniac.jpg' alt="Insomniac" />
      </div>
    )
  }
}

export class Mason extends React.Component{
  render(){
    return(
      <div className="Mason">
        <img src='/images/mason.jpg' alt="Mason" />
      </div>
    )
  }
}

export class Seer extends React.Component{
  render(){
    return(
      <div className="Seer">
        <img src="/images/seer.png" alt="Seer" />
      </div>
    )
  }
}

export class TroubleMaker extends React.Component{
  render(){
    return(
      <div className="Trouble-Maker">
        <img src="/images/troublemaker.jpg" alt="Trouble Maker" />
      </div>
    )
  }
}
