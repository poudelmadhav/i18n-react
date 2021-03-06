import React, { Component } from 'react';
import './App.css';
import { useTranslation } from "react-i18next";
import i18n from './i18n';

const FunApp = () => {
    const { t } = useTranslation();
    return <h2>{t('welcome.title', { framework: "react-i18next" })}</h2>;
}

class App extends Component {
  render() {
    return (
      <h1 className="App-title">
        <FunApp />
      </h1>     
    );
  }
}


 export default App;
