import React,{Component} from 'react'
import './App.css'

class Welcome extends Component {	
	//parent to child concept
  constructor(props) {
    super(props);
	this.state = {
		date: new Date(),
		userName: 'asdjfhakdfhk',
		password:''
	};
  }
  //like oninit 
  componentDidMount() {
	  this.setState({
		  userName: 'Rajesh'
	  })
  }
  // we need to use correctly 
  componentDidUpdate(prevProps, prevState){
	  console.log('props',prevProps)
	  console.log('prevState',prevState)
	  if(prevState.userName === '')
	   this.setState({ userName: 'Hari'})
  }
  //destory
  componentWillUnmount() {
	  this.setState({
		  userName: 'gfhgfh'
	  })
  }
  
  handleOnClick=()=>{
	  this.setState({
		  userName: ''
	  })
  }
  render() {
    return (
	   <div>
	   <button onClick={this.handleOnClick}> on click </button>
		<h1>Hello Vivek {this.state.userName}</h1>
		</div>
	);
  }
}

export default Welcome
