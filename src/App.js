//import React, { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
//import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state =  {increasing: false}
//    this.state = {val: 0}    
//    this.update = this.update.bind(this)
  }
  update( e ){
  	ReactDOM.render(
  		<App val= {this.props.val+1} />,
  		document.getElementById('root'))
    	//this.setState({
     	// val: this.state.val + 1,
    	//})
  }

  componentWillReceiveProps(nextProps){
  	this.setState({increasing: nextProps.val > this.props.val})
  }

  shouldComponenReceiveProps(nextProps){
  	return nextProps.val % 5 === 0;
  }

//  componentWillMount() {
 //   console.log('componentWillMount')
 //   this.setState({m: 2})
 // }
  render() {
  	console.log(this.state.increasing)
    //console.log('render');
    return ( 
    <button onClick={this.update.bind(this)}>
    {this.props.val}
    </button>
    )
    //{this.props.val * this.state.m}</button> )
  }
  componenDidUpdate(prevProps, prevState) {
  	console.log(`prevProps: ${prevProps.val}`)
  }
 // componentDidMount(){
//    console.log('componentDidMount')
//    this.inc = setInterval(this.update,500)
//  }
//  componentWillUnmount(){
//    console.log('componentWillUnmount ')
 //   clearInterval(this.inc)
 // }
}

class Wrapper extends React.Component {
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return(
    <div>
      <button onClick={this.mount.bind(this)}>Mount</button>
      <button onClick={this.unmount.bind(this)}>UnMount</button>
      <div id="a"></div>
    </div> 
    ) 
  }
}

class Input extends React.Component {
  render(){
    return <div><input ref="input" type="text" onChange={this.props.update}/></div>
  }
}

App.defaultProps = {val: 0}
export default App 


/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/

//export default App;
