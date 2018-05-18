import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import routes from './routes'

class App extends Component {
  render() {
    // console.log(this.props.location)
    return (
      <div className="App">
       {/* {
         this.props.location.pathname.startsWith('/') ? 
            <div>{routes}</div> : <div> */}
              <Nav />
              {routes}
            {/* </div>
       } */}
      </div>
    );
  }
}

export default App;
