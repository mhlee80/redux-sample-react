import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CounterIncrementButton extends Component {
  handlePress = () => {
    if (!!this.props.onPress) this.props.onPress();
  }

  render() {
    return (
      <div onClick={this.handlePress}>+</div>
    )
  }
}

CounterIncrementButton.propTypes = {
  onPress: PropTypes.func    // () => {}
};

export default CounterIncrementButton;