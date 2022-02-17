import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {query: ''}
  }
  /**
   * a method that is used in the header to change the local state in app
   * correspondes to the user input on the search bar
   * state will then be passed to filterpostsquery to be processed
   * @param {String} q 
   */
  updateQuery = (q) => {
    this.setState(
      {query: {q}}
    )
  }

  /**
   * 
   * @returns {HTMLElement}
   */
  render(){
    return(
      <div className="App">
        <Header updateQuery={this.updateQuery}/>
        <Main query={this.state.query}/>
        <Footer/>
      </div>
    )
  }
}
export default App;