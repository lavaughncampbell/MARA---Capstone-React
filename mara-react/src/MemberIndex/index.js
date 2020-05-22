import React, { Component } from 'react'
import MemberList from '../MemberList'
import NewMemberForm from '../NewMemberForm'
// you will see (Default) export written here instead of at the bottom 
export default class MemberIndex extends Component {

	constructor(props) {
		super(props)

		this.state = {
			members: [] // members are going here in state 
			// this is where the function that changes the array 
			// we want to put the function in a place where they can
			// easily access the data. 
		}
	}

	// want members to load up automatically 
	componentDidMount() {
		// get the members when this component is first rendered 
		this.getMembers()
	}
	// call members when component is mounted to see them on the page 
	// define a method called get members 
	getMembers = async () => {
		try {
			// load members from member index route in the api 
			// copy path to fetch your api. 
			// make a variable for your API fetch / path to make it easier to debug later. 
			// Flask / Flask-Cors expects this!!!!
		  const url = process.env.REACT_APP_API_URL + "/api/v1/members/"
		  console.log("about to fetch data from:")
		  console.log(url)
		  const membersResponse = await fetch(url)	
		  console.log("here is the Response from the fetch call")
		  console.log(membersResponse)
		  const membersJson = await membersResponse.json()
		  console.log("here is the data we got in getMembers in MemberIndex")
		  console.log(membersJson)

		  // be sure to inspect your data that you get back from APIs 
		  // log the results and drilling down into the response 
		  // and make sure you have exactly the data (usually an array) you want 
		  // to put into state is very important 

		  this.setState({
		  	members: membersJson.data // this is the method that gets our members from the API and pushes them to state 
		  })

		  // dont log state here -- setState might be asynchronous 

		} catch(err) {
			console.error("Error getting member data", err) 
		}
	}


	createMember = (memberToAdd) => {
		console.log("here is the member you are trying to add")
		console.log(memberToAdd)
		// make a fetch call to our Flask API 
		// method will be post 
		// needs to have a body: coming form NewMemberForm 
		// this will be passed down to NewMemberForm
		// as props and call it in there and pass in the 
		// we need to specify the content type is json 

	}

	render() {
		console.log("here is this.state in render() in MemberIndex")
		console.log(this.state)
		return(
			<React.Fragment>
				<h2>List of the members</h2>
				<NewMemberForm createMember={this.createMember} />
				<MemberList members={this.state.members} /> 
			</React.Fragment>
		)
	}
}