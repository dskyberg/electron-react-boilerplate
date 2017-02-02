// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';



export default class Home extends Component { 

  constructor(props, context) {
    super(props, context);
    this.state = {
      value: ''
    };
    const Do  = require('electron').remote.require('./remote/do');
    const myDo = new Do();
    myDo.something().then(value => { this.setState({value:value}); });
  }  
  
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
        <span>{this.state.value}</span>
      </div>
    );
  }
}
