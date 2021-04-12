import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { cwIndex } from '../../../api/cheesewheelapi'

class CwIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cheesewheels: null
    }
  }

  componentDidMount () {
    const { msgAlert, user } = this.props

    cwIndex(user)
      .then(res => this.setState({ cheesewheels: res.data.cheesewheels }))
      .then(() => msgAlert({
        heading: 'The Cheese is in the open...',
        message: 'Here is your tray of cheese.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'What is that smell...?',
          message: 'The cheese seems to have... been cut: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { cheesewheels } = this.state
    if (!cheesewheels) {
      return (
        <Spinner animation='border' role='status'>
          <span className='sr-only'>
            Loading...
          </span>
        </Spinner>
      )
    }

    const cheesewheelsJsx = cheesewheels.map(cheesewheel => (
      <Link to={`/cheesewheels/${cheesewheel._id}`} key={cheesewheel._id}>
        <li>
          {cheesewheel.variety}
        </li>
      </Link>
    ))

    return (
      <div>
        <h3>Your cheeses</h3>
        <ul>{cheesewheelsJsx}</ul>
      </div>
    )
  }
}

export default CwIndex
