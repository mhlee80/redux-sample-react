import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CounterValue extends Component {
  render() {
    return (
      <h1>{this.props.value}</h1>
    )
  }
}

CounterValue.propTypes = {
  value: PropTypes.number
};

export default CounterValue;