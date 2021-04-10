import React, { Fragment, useState } from 'react'
import { Route, withRouter } from 'react-router-dom'

// styles
import 'bootstrap/scss/bootstrap.scss'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'

import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
import TakeAsurvey from './components/TakeAsurvey/TakeAsurvey'
import SurveyResponse from './components/SurveyResponse/SurveyResponse'
import { SurveyCreate, SurveyShow, SurveyUpdate, SurveyIndex } from './components/routes'
import CwCreate from './components/routes/Cheesewheel/cwCreate'

function App (props) {
  const [ user ] = useState(null)
  const [ msgAlerts ] = useState([])

  const setUser = user
  const clearUser = user.useState(null)
  const deleteAlert (id) =
    useState((state) => {
      return { msgAlerts: msgAlerts.filter(msg => msg.id !== id) }
      }
    }
  )

  return (
    <React.Fragment>
      <div className="App">
        {props.location.state ? props.location.state.msg : null}
      </div>
      <Fragment id='routes'>
        <Fragment id='unauthenticated'>
          <Fragment id='auth'>
            <Route path='/sign-up' render={() => (
              <SignUp msgAlert={this.msgAlert} setUser={setUser} />
            )} />
            <Route path='/sign-in' render={() => (
              <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
            )} />
          </Fragment>
          <Fragment id='participant'>
            <Route path='/take-survey' render={() => (
              <TakeAsurvey msgAlert={this.msgAlert}/>
            )} />
            <Route exact path='/response/:surveyID/:participantID' render={() => (
              <SurveyResponse msgAlert={this.msgAlert}/>
            )} />
          </Fragment>
        </Fragment>
        <Fragment id='authenticated'>
          <Fragment id='userRoutes'>
            <AuthenticatedRoute user={user} path='/sign-out' render={() => (
              <SignOut msgAlert={this.msgAlert} clearUser={clearUser} user={user} />
            )} />
            <AuthenticatedRoute user={user} path='/change-password' render={() => (
              <ChangePassword msgAlert={this.msgAlert} user={user} />
            )} />
          </Fragment>
        </Fragment>
        <Fragment id='cheesewheel'>
          <AuthenticatedRoute user={user} path='/create-cheesewheel' render={() => (
            <CwCreate msgAlert={this.msgAlert} user={user} />
          )} />
        </Fragment>
        <Fragment id='survey'>
          <AuthenticatedRoute user={user} path='/create-survey' render={() => (
            <SurveyCreate msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/surveys/:id/edit' render={() => (
            <SurveyUpdate msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/surveys/:id' render={() => (
            <SurveyShow msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/surveys' render={() => (
            <SurveyIndex msgAlert={this.msgAlert} user={user} />
          )} />
        </Fragment>
      </Fragment>
    </React.Fragment>
  )
}

export default withRouter(App)
