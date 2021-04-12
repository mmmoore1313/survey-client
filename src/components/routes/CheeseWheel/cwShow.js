import React, { Component, Fragment } from 'react'
import { Spinner, Button } from 'react-bootstrap'
import { withRouter, Redirect, Link } from 'react-router-dom'
import { cwShow, cwDelete } from '../../../api/cheesewheelapi'

class CwShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cheesewheel: {
        variety: '',
        age: null,
        health: null
      },
      deleted: false
    }
  }
  componentDidMount () {
    const { match, msgAlert } = this.props

    cwShow(match.params.id)
      .then(res => this.setState({ cheesewheel: res.data.cheesewheel }))
      .then(() => msgAlert({
        heading: 'Say Cheese!',
        message: 'The big cheese is here and it is called...',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'You have chosen... poorly',
          message: 'Your cheese request is... denied ' + error.message,
          variant: 'danger'
        })
      })
  }
  handleDelete = event => {
    const { user, msgAlert, match } = this.props

    cwDelete(match.params.id, user)
      .then(() => this.setState({ deleted: true }))
      .then(res => msgAlert({
        heading: 'Varsity tryouts were a, success?',
        message: 'Your cheese has been cut cleanly. You may proceed.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Something is Rotten in Denmark',
          message: 'Your knife is stuck in the cheese, try cutting with the grain' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    const { cheesewheel, deleted } = this.state

    if (!cheesewheel) {
      return (
        <Spinner animation='border' role='status'>
          <span className='sr-only'>
            Fechez le fromage...
          </span>
        </Spinner>
      )
    }
    if (deleted) {
      return <Redirect to='/cheesewheels' />
    }

    return (
      <Fragment>
        <h3>{cheesewheel.variety}</h3>
        <h4>Age: {cheesewheel.age} years</h4>
        <h4>Health Gained: {cheesewheel.health} hp</h4>
        <h5>ID number: {cheesewheel._id}</h5>
        <Button onClick={this.handleDelete}>
          Cut the cheese (Delete that stench)
        </Button>
        <Link to={`/cheesewheels/${cheesewheel._id}/edit`}>
          <Button>
            Change that Cheese
          </Button>
        </Link>
      </Fragment>
    )
  }
}

export default withRouter(CwShow)
