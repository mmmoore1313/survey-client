import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { cwCreate } from '../../../api/cheesewheelapi.js'
import { Form, Button } from 'react-bootstrap'

class CwCreate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cheesewheel: {
        variety: '',
        age: null,
        health: null
      },
      cheesewheelId: null
    }
  }
  handleSubmit = event => {
    event.preventDefault()

    const { user, msgAlert } = this.props
    const { cheesewheel } = this.state

    cwCreate(cheesewheel, user)
      .then(res => {
        this.setState({ cheesewheelId: res.data.cheesewheel._id })
        return res
      })
      .then(res => msgAlert({
        heading: 'Huzzah!',
        message: `This wheel of ${res.data.cheesewheel.variety} has been added to your inventory`,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'That is not cheese! It is... something worse',
          message: 'Could not create cheese wheel and this is why: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleChange = event => {
    event.persist()
    this.setState(state => {
      return {
        cheesewheel: { ...state.cheesewheel, [event.target.name]: event.target.value }
      }
    })
  }

  render () {
    // const { variety, age, health, cheesewheelId } = this.state

    if (this.state.cheesewheelId) {
      return <Redirect to={`/cheesewheels/${this.state.cheesewheelId}`} />
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Craft your cheesewheel</h2>
        <Form.Group>
          <Form.Label>Variety</Form.Label>
          <Form.Control
            required
            type="text"
            name="variety"
            value={this.state.variety}
            placeholder="What Cheese is this?"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control
            required
            name="age"
            value={this.state.age}
            type="text"
            placeholder="How old is this cheese?"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Health</Form.Label>
          <Form.Control
            required
            type="text"
            name="health"
            value={this.state.health}
            placeholder="How much is this gonna help?"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    )
  }
}
export default CwCreate
