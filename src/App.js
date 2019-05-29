import React,{Component} from 'react';

import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import './App.css';
import ErrorBoundary from './ErrorBoundary';

class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
	        searchfield:''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{
			return response.json();
		})
		.then(users=>{
			this.setState({robots: users})
		})
		
	}
	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value})
		console.log(event.target.value);
		
		//console.log(filteredRobots);
	}
	
	render(){
		const filteredRobots=this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
	return(
		<div className='tc'>
		<h1 className='f2'>Robofriends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		  <ErrorBoundary>
		  <CardList robots={filteredRobots} />
		  </ErrorBoundary>
		</Scroll>
		</div>
		);
}}
export default App;