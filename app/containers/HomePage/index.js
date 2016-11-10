import React, {Component} from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';

import {
  DEFAULT,
 } from '../App/constants';

import {
  defaultAction,
} from '../App/actions'


class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  onClickOnButton = () => {
    this.props.onDefaultAction();
  }

  render() {
    const { loading, message, messageDelay } = this.props;

    let messageContent = (<div><p>Click on button and this message will change, tru a action via saga</p></div>);
    if( message ) { messageContent = ( <div> <p dangerouslySetInnerHTML={{__html: message}}></p></div> ) }

    let messageDelayContent = (<div><p >This message will change to, in same way but with a 1000ms delay!</p></div>);
    if( messageDelay ) { messageDelayContent = ( <div> <p dangerouslySetInnerHTML={{__html: messageDelay}} ></p></div> ) }

    return (
      <section>
        <p><button onClick={this.onClickOnButton}> Click me </button></p>
        <div className={styles.warper}>
          {messageContent}
          {messageDelayContent}
        </div>
        <p>
          To aget started, edit <code>src/HomePage/index.js</code> and save to reload.
        </p>
      </section>
    );
  }
}


// export default App;
const mapStateToProps = (state) => {
  return {
    loading: state.getIn(['app','loading']),
    message: state.getIn(['app','message']),
    messageDelay: state.getIn(['app','nested','message'])
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onDefaultAction: () => dispatch(defaultAction()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
