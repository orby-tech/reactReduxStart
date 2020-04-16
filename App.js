import  React, { Component } from 'react';
import  './App.css';
import  { increment, decrement, changeTheme } from './redux/actions'

import  {applyMiddleware, createStore, compose} from 'redux'
import  {rootReducer} from './redux/rootReducer'
import  thunk from 'redux-thunk'
import  { composeWithDevTools } from 'redux-devtools-extension'
import  logger from 'redux-logger'
import  { connect, provider } from 'react-redux'

const store = createStore(rootReducer,   
    composeWithDevTools(
    applyMiddleware(thunk, logger)
  ))

class App extends Component{
  constructor(props) {
    super(props);
    this.incClick = this.incClick.bind(this);
    this.decClick = this.decClick.bind(this);
    this.themeClick = this.themeClick.bind(this);

      this.state = {}
    };


  incClick() {
    this.props.dispatch(increment())
  };

  decClick() {
    this.props.dispatch(decrement())
  };

  themeClick() {
    const newTheme = this.props.theme === 'light'
    ? 'dark'
    : 'light'
    this.props.dispatch(changeTheme(newTheme))
  }

  render(){
    const counter = this.state.counter
    const theme = this.props.theme === 'light' ? 'container pt-5 dark' : 'container pt-5'
    console.log(this.props)
    return (
      <div className={theme}>
        <h1 className="heading">
          <span>Redux</span>
          <button className="btn btn-info" id="theme" onClick={this.themeClick} >Сменить тему</button>
        </h1>

        <hr />

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Счетчик: <span id="counter">{this.props.counter}</span></h5>
            <button className="btn btn-primary" onClick={this.incClick} id="add">Добавить</button>
            <button className="btn btn-danger" onClick={this.decClick} id="sub">Убрать</button>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return { 
    counter: state.counter,
    theme: state.theme.value
  };
}

const WrappedApp = connect(mapStateToProps)(App);

export default WrappedApp;
