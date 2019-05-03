import React, { Component } from 'react';
import CounterValue from '../p-components/CounterValue';
import CounterIncrementButton from '../p-components/CounterIncrementButton';
import CounterDecrementButton from '../p-components/CounterDecrementButton';
import { increment, decrement } from '../../redux/counter/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Counter extends Component {
  render() {
    return (
      <div>
        <section>
          <CounterValue value={this.props.value}/>
        </section>
        <section>
          <CounterIncrementButton onPress={this.props.handleIncrementPress}/>
          <CounterDecrementButton onPress={this.props.handleDecrementPress}/>
        </section>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number,
  onIncrementPress: PropTypes.func,    // () => {}
  onDecrementPress: PropTypes.func     // () => {}
};

let mapStateToProps = (state) => {
  return {
    value: state.counter.value
  };
}

let mapDispatchToPros = (dispatch) => {
  return {
    handleIncrementPress: () => dispatch(increment()),
    handleDecrementPress: () => dispatch(decrement())
  }
}

Counter = connect(mapStateToProps, mapDispatchToPros)(Counter);

export default Counter;