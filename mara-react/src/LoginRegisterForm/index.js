import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'

export default class LoginRegisterForm extends Component {

	constructor() {
		super()

		this.state = {
			email: '',
			password: ''
		}
	}


	render() {
		return (
			<div>
				<Form>
					<Label>Email:</Label>
					<Form.Input
						type="text"
						name="email"
						placeholder="Enter email"
						value={this.state.email}
					/>
					<Label>Password:</Label>
					<Form.Input
						type="text"
						name="password"
						placeholder="Enter password"
						value={this.state.password}
					/>
					<Button type="Submit">Log In</Button>
				</Form>
			</div>
		)
	}
}


