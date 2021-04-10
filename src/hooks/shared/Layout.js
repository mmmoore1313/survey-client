import React, { Component, Fragment } from 'react'
// import { Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
// import Home from './Home'
// import Modal from './Modal'
import { Card, Container } from 'react-bootstrap'

class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      show: false
    }
  }

  setUser = user => this.setState({ user })

  render (props) {
    const { user } = this.state
    return (
      <Fragment>
        <Header user={user} />
        <Container>
          <Card>
            <Card.Body>
              {props.children}
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
        </Container>
        {/* <Modal onClose={this.showModal} show={this.state.show} /> */}
        <Footer />
      </Fragment>
    )
  }
}

export default Layout
