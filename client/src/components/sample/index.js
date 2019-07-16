import React from 'react';
import { connect } from 'react-redux';

import { getText } from './actions';

class Sample extends React.Component {

  constructor(props) {
    super(props);
    
    this.handleGetText = this.handleGetText.bind(this);

    this.handleGetText();
  }

  handleGetText() {
    this.props.getText("test");
  }

  render() {
    return <h1>Hello, {this.props.displayText}</h1>;
  }
}

// Grab any props you want to use on this component
const mapStateToProps = (state) => {
  return {
    displayText: state.sample.displayText
  }
}

// Create any dispatchers you want to use in this component
const mapDispatchToProps = dispatch => {
  return {
    getText: text => dispatch(getText(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample);