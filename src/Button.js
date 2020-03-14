import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component {
  render() {
   // return <h2>I am a {this.props.color} Car!</h2>;
    return <button>{this.props.text}</button>;
  }
}

