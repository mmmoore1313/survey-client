import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'
// import Layout from './Layout'
import { Card } from 'react-bootstrap'

const Home = ({ user }) => (
  <Fragment>
    <Card.Title>
      Welcome to My Portfolio
    </Card.Title>
    <Card.Text>
      This Is the Home Card
    </Card.Text>
  </Fragment>
)

export default Home
