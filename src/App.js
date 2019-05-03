import React, { Component } from 'react';
import Counter from './components/c-components/Counter';

class App extends Component {
  render() {
    return (
      <div style={ {textAlign: 'center'} }>
        <Counter/>
      </div>
    );
  }
}

export default App;