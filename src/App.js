import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './config/firebase';

class App extends Component {
  state = {
    user:'555'
  }

  
  render(){
    return (
      <div className="App">
      {this.state.user}
      </div>
    );
  }
 
}

export default App;
