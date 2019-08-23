import React, { Component } from 'react';
import './App.css';
import { Translate, Trans } from 'react-i18next';


class App extends Component {
  render() {
    return (
      <h1 className="App-title">
        { this.props.t('welcome.title', { framework: "react-i18next" }) }
      </h1>

     
    );
  }
}

 export default Translate('common')(App);
