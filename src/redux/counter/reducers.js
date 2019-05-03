import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT } from './actions';

const counterInitialState = {
  value: 0
}

function counter(state = counterInitialState, action) {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + 1
      });
    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value - 1
      });
    default:
      return state; 
  }
}

const counterApp = combineReducers({
  counter
});

export default counterApp;