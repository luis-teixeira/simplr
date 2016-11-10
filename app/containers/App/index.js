import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import HomePage  from 'containers/HomePage';
import createSagaMiddleware from 'redux-saga';
import logo from './logo.svg';

class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>Welcome to Simplr</h2>
          <h3>Simplr is a React StartKit with Redux and Redux-Saga</h3>
          <p className={styles.intro}>
            To get started, edit <code>src/App/index.js</code> and save to reload.
          </p>
        </div>
        <HomePage />
      </div>
    );
  }
}

export default App;
