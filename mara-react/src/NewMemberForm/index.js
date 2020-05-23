import React, { useState } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default function NewMemberForm({createMember}) {
  const [Member, setMember] = useState({
    name: '',
    email: ''
  })


  const handleChange = event => {
    setMember({
      ...member, // https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables
              // i.e. this copies all the previous proerties in there and is necessary because updating 
              // state with hooks always replaces, it doesn't merge like setState does
      [event.target.name]: event.target.value // overwrite the 
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    // call a method passed downn from the parent 
    // to make state data from this component available 
    // in the parent component so from the child to the parent
    // THIS IS CALLED LIFTING UP STATE!
    createMember(member)
  }

  return (
    <Segment>
      <h4>Add new member:</h4>
      <Form onSubmit={handleSubmit}>
        <Label>Name:</Label>
        <Form.Input 
          type="text"
          name="name"
          value={member.name}
          placeholder="Enter a name"
          onChange={handleChange}  
        />
        <Label>Email:</Label>
        <Form.Input 
          type="email"
          name="email"
          value={member.email}  
          placeholder="Enter a email"
          onChange={handleChange}
        />
        <Button type="Submit">Create Member</Button>
      </Form>
    </Segment>
  )

}

/*
export default class NewDogForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      breed: ''
    }
  }
  handleChange = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    // const state = this.state
    // state[event.target.name] = event.target.value
    // this.setState(state)
    // you can do the above using ES6 computed properties syntax
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    // call a method passed down from the parent
    // to make state data from this component available
    // in the parent component (DogContainer)
    // THIS IS CALLED LIFTING UP STATE 
    this.props.createDog(this.state)
    // clear the form
    this.setState({
      name: '',
      breed: '',
      owner: ''
    })
  }
  render() {
    return (
      <Segment>
        <h4>Add new dog:</h4>
        <Form onSubmit={this.handleSubmit} >
          <Label>Name:</Label>
          <Form.Input 
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter a name"
            onChange={this.handleChange}  
          />
          <Label>Breed:</Label>
          <Form.Input 
            type="text"
            name="breed"
            value={this.state.breed}  
            placeholder="Enter a breed"
            onChange={this.handleChange}
          />
          <Button type="Submit">Create Dog</Button>
        </Form>
      </Segment>
    )
  }
}
*/



// MIGHT HAVE TO REVISIT AND UNCOMMENT THIS CODE TO USE TO CREATE A NEW MEMBER" 