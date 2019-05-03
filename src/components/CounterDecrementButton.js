import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CounterDecrementButton extends Component {
  handlePress = () => {
    if (!!this.props.onPress) this.props.onPress();
  }

  render() {
    return (
      <div onClick={this.handlePress}>-</div>
    )
  }
}

CounterDecrementButton.propTypes = {
  onPress: PropTypes.func    // () => {}
};

export default CounterDecrementButton;