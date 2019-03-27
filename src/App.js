import React, {Component} from 'react'
import './App.css';
import Welcome from './Welcome'
import Counter from './Counter'
import Todos from './Todos'
import Users from './Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Welcome title="React" />
        </header>
        <Users/>
      </div>
    );
  }
}

export default App;
