// LETS RENDER THE MEMBER DATA ON THE SCREEN HERE!  
import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export default function MemberList(props) {
	console.log("props in MemberList")
	console.log(props) // this should show use a list of memebers after the API call is done in MemberIndex 
	const members = props.members.map(member => {
		// for each member return a card 
		return(
			<Card key={member.id}>
				<Card.Content> 
				<Card.Header>
				{member.name}
				</Card.Header>
				<Card.Description>
				{member.name} has a email {member.email}
				</Card.Description>
				</Card.Content>
				<Card.Content textAlign=("center")>
					<Button 
					basic 
					color='red'
					onClick={() => props.deleteMember(member.id)}
					>
						Delete {member.name}
					</Button>
				</Card.Content>

			</Card>
		)
	}
	return(
		<React.Fragment>
		<h3>MemberList</h3> 
			<Card.Group>
				{members}
			</Card.Group>
		</React.Fragment>
	)
}