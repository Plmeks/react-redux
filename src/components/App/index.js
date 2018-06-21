import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

const appChangeText = (value) => {
  return {
    type: "APP_CHANGE_TEXT",
    payload: value
  };
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input
          type="text"
          placeholder="text"
          value={this.props.text} 
          onChange={(event) => {
            this.props.appChangeText(event.target.value)
          }}
        /> 
        <p>{this.props.text}</p>
      </div>
    );
  }
}

// Connection-Wrapper for App
export default connect(
    // Props in the App Component from store reducer method
    // executes when reducer firing
    (state) => ({text: state.AppReducer.text}), 
    
    // Bind methods for calling reducer(with dispatch)
    // And put them into App props. (property name would be in this.props)
    (dispatch) => ({
      appChangeText: bindActionCreators(appChangeText, dispatch)
    })
  )(App);