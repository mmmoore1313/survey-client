import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { cwUpdate, cwShow } from '../../../api/cheesewheelapi'
import { Form, Button, Spinner } from 'react-bootstrap'

class CwUpdate extends Component {
  constructor () {
    super()
    this.state = {
      cheesewheel: null,
      updated: false
    }
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props

    cwShow(match.params.id, user)
      .then(res => this.setState({ cheesewheel: res.data.cheesewheel }))
      .then(() => msgAlert({
        heading: 'It is late! I have run out of humor...',
        message: 'Your cheese has been... retrieved... ¯|(ツ)/¯',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Your cheese was... lost',
          message: 'We could not deliver your cheese as requested ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, match, msgAlert } = this.props
    const { cheesewheel } = this.setState

    cwUpdate(match.params.id, cheesewheel, user)
      .then(res => this.setState({ updated: true }))
      .then(() => {
        msgAlert({
          heading: 'CheeseChange!',
          message: 'A new cheese is born! Your cheese has been updated',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Disappointing Alchemy',
          message: 'This cheese has yet to turn to gold... ' + err.message,
          variant: 'danger'
        })
      })
  }

  handleChange = event => {
    this.setState({ cheesewheel: { ...this.state.cheesewheel, [event.target.name]: event.target.value } })
  }

  render () {
    const { cheesewheel, updated } = this.state

    if (!cheesewheel) {
      return (
        <Spinner animation='border' role='status'>
          <span className='sr-only'>
            Sniffing out that cheese
          </span>
        </Spinner>
      )
    }

    if (updated) {
      return <Redirect to={`/cheesewheels/${this.props.match.params.id}`} />
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Changing Cheeses</h2>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            required
            type='text'
            name='variety'
            value={cheesewheel.variety}
            placeholder='What is this new cheese?'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control
            required
            type='text'
            name='age'
            value={cheesewheel.age}
            placeholder='How old is this cheese?'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Health Garnered</Form.Label>
          <Form.Control
            required
            type='text'
            name='health'
            value={cheesewheel.health}
            placeholder='How much more health is there in this newish cheese?'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
        >
          Submit
        </Button>
      </Form>
    )
  }
}

export default withRouter(CwUpdate)
