import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class EditMemberModal extends Component {
	constructor(props) {
		super(props)

		console.log("props in constructor in EditMemberModal")
		console.log(props); 

		// if you want the intial value of the modals in props you can copy pros into State but ONLY HERE IN MODAL. 
		// Data should only live in one place in your app. 
		// WARNING: The ONLY time it's okay to copy props into state 
		// is when you are loading data into an edit modal. // DO NOT DO IT ANY OTHER TIME
		// You can use componentDidMount to get in the info if needed. 

		this.state = {
			name: props.memberToEdit.name,  
			email: props.memberToEdit.email 
		}
	}
	
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value 
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.updateMember(this.state)
	}

	render() {
		return (
			<Segment>
				<h4>Add new member:</h4>
				<Form onSubmit={this.handleSubmit}>
					<Label>Name:</Label>
					<Form.Input 
						type="text"
          				name="name"
          				value={this.member.name}
          				placeholder="Enter a name"
          				onChange={this.handleChange}  
        			/>
        			<Label>Email:</Label>
        			<Form.Input 
        				type="email"
        				name="email"
          				value={this.member.email}  
          				placeholder="Enter a email"
          				onChange={this.handleChange}
        			/>
        			<Button type="Submit">Create Member</Button>
        		</Form>
        	</Segment>
        )
	}
}