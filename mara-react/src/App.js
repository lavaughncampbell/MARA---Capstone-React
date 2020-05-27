import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Loading from './components/loading.js'; 
import HomePage from './HomePage'
import MainContent from './MainContent'
import MemberIndex from './MemberIndex'
import LoginRegisterForm from './LoginRegisterForm'

export default class App extends Component {
	constructor() {
		super() 
		this.state = {
			loggedIn: false, 
			loggedInUserEmail: '' // might be helpful to track something to display
		}
	}
	render() {
		return(
			<div className="App">
			{ 
				this.state.loggedIn
				? 
				<MemberIndex />
				: 
				<LoginRegisterForm />
			}
			</div> 
		); 
	}
}