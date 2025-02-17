import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
// this is a comment
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
import TakeAsurvey from './components/TakeAsurvey/TakeAsurvey'
// import crud components
import SurveyResponse from './components/SurveyResponse/SurveyResponse'
// import crud components
import SurveyCreate from './components/routes/SurveyCreate'
import SurveyShow from './components/routes/SurveyShow'
import SurveyUpdate from './components/routes/SurveyUpdate'
import SurveyIndex from './components/routes/SurveyIndex'
import CwCreate from './components/routes/CheeseWheel/cwCreate'
import CwIndex from './components/routes/CheeseWheel/cwIndex'
import CwShow from './components/routes/CheeseWheel/cwShow'
import CwUpdate from './components/routes/CheeseWheel/cwUpdate'
import Layout from './components/shared/Layout'
// import Header from './components/Header/Header'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        {msgAlerts.map(msgAlert => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <Layout user={user} />
        <main className="container">
          <div id='signInUpRoutes'>
            <Route path='/sign-up' render={() => (
              <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
            )} />
            <Route path='/sign-in' render={() => (
              <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
            )} />
          </div>
          <div id='participantRoutes'>
            <Route path='/take-survey' render={() => (
              <TakeAsurvey msgAlert={this.msgAlert}/>
            )} />
            <Route exact path='/response/:surveyID/:participantID' render={() => (
              <SurveyResponse msgAlert={this.msgAlert}/>
            )} />
          </div>
          <div id='authUserRoutes'>
            <AuthenticatedRoute user={user} path='/sign-out' render={() => (
              <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
            )} />
            <AuthenticatedRoute user={user} path='/change-password' render={() => (
              <ChangePassword msgAlert={this.msgAlert} user={user} />
            )} />
          </div>
          <div id='surveyRoutes'>
            {/* create a survey */}
            <AuthenticatedRoute user={user} path='/create-survey' render={() => (
              <SurveyCreate msgAlert={this.msgAlert} user={user} />
            )} />
            {/* Update the survey */}
            <AuthenticatedRoute user={user} exact path='/surveys/:id/edit' render={() => (
              <SurveyUpdate msgAlert={this.msgAlert} user={user} />
            )} />
            {/* Show the survey */}
            <AuthenticatedRoute user={user} exact path='/surveys/:id' render={() => (
              <SurveyShow msgAlert={this.msgAlert} user={user} />
            )} />
            {/* Show ALL surveys */}
            <AuthenticatedRoute user={user} exact path='/surveys' render={() => (
              <SurveyIndex msgAlert={this.msgAlert} user={user} />
            )} />
          </div>
          <div id='cheesewheelsroutes'>
            {/* create a cheesewheel */}
            <AuthenticatedRoute user={user} path='/create-cheesewheel' render={() => (
              <CwCreate msgAlert={this.msgAlert} user={user} />
            )} />
            {/* Show ALL cheesewheels */}
            <AuthenticatedRoute user={user} exact path='/cheesewheels' render={() => (
              <CwIndex msgAlert={this.msgAlert} user={user} />
            )} />
            {/* Show one cheesewheel */}
            <AuthenticatedRoute user={user} exact path='/cheesewheels/:id' render={() => (
              <CwShow msgAlert={this.msgAlert} user={user} />
            )} />
            {/* Update the cheesewheel */}
            <AuthenticatedRoute user={user} exact path='/cheesewheels/:id/edit' render={() => (
              <CwUpdate msgAlert={this.msgAlert} user={user} />
            )} />
          </div>
        </main>
      </Fragment>
    )
  }
}

export default App
