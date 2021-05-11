import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import { Card, Container } from 'react-bootstrap'

class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null
    }
  }

  setUser = user => this.setState({ user })

  render (props) {
    const { user } = this.state
    return (
      <Fragment>
        <h1>SurveyUs</h1>
        <Header user={user} />
        <Container>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Home user={user} />
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

export default Layout
