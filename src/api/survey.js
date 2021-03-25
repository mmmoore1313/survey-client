import apiUrl from '../apiConfig'

import axios from 'axios'

export const surveyCreate = (survey, user) => {
  return axios({
    url: apiUrl + '/surveys',
    method: 'POST',
    // Add an authorization header
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      survey: {
        title: survey.title,
        question: survey.question
      }
    }
  })
}
export const surveyShow = (id, user) => {
  return axios({
    url: apiUrl + '/surveys/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
export const surveyDelete = (id, user) => {
  return axios({
    url: apiUrl + '/surveys/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
