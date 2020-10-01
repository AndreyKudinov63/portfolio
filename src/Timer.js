import React, { Component } from 'react'
//import "bootswatch/dist/lux/bootstrap.css";
import "./timer.css";
import {Button, Row, Col, Container}  from "react-bootstrap";


const INTERVAL = 100;

class Timer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {value: 0};
    this.state = {value: 0, stopped: false};
  }

  increment(){
    if(!this.state.stopped) (this.setState({value: this.state.value + 1}));
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentDidUpdate(){
  const value = this.state.value;
  /*
  if (this.state.stopped) document.title = "Таймер";
  else document.title = "Таймер: "+Math.floor(value/INTERVAL/60/60)+":"
  +Math.floor(value/INTERVAL/60) % 60+":"+Math.floor(value/INTERVAL) % 60;
  */
  }

stopTimer = () => {
    this.setState({stopped: !this.state.stopped});
  if(this.state.stopped){
    clearInterval(this.timerID);
  }
  else
  {
    this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
  };
}

resetTimer = () => {
  this.setState({value: 0});    
}

  render() {
    const value = this.state.value
    return (
    <Container>
      <Row>
        <Col md={9} sm={9}>
          <h1 class="display-1"></h1>
          <h1 class="display-1">
            <span><kbd>{Math.floor(value/INTERVAL/60/60)}</kbd> : </span>
            <span><kbd>{Math.floor(value/INTERVAL/60) % 60}</kbd> : </span>
            <span><kbd>{Math.floor(value/INTERVAL) % 60}</kbd> . </span>
            <span><kbd>{value % INTERVAL < 10 ? '0' : ''}{value % INTERVAL}</kbd></span>
          </h1>           
        </Col>
        <Col md={3} sm={3}>  
          <div>
            <button class="btn-primary btn-lg btn-block btn-change7" onClick={this.stopTimer}>{this.state.stopped?'Продолжить':'Остановить'}</button> 
            <button class="btn-outline-primary btn-md btn-block btn-change7" onClick={this.resetTimer}>Сбросить</button>
          </div>
        </Col>  
      </Row>
    </Container>
    );
  }
}
//btn hvr-bounce-to-left btn-lg
//btn btn-primary btn-lg btn-block btn-change1

export default Timer;
