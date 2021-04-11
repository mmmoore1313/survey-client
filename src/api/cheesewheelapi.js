import apiUrl from '../apiConfig'

import axios from 'axios'

export const cwCreate = (cheesewheel, user) => {
  return axios({
    url: apiUrl + '/cheesewheels',
    method: 'POST',
    // Add an authorization header
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      cheesewheel: {
        variety: cheesewheel.variety,
        age: cheesewheel.age,
        health: cheesewheel.health
      }
    }
  })
}

export const cwIndex = (user) => {
  return axios({
    url: apiUrl + '/cheesewheels',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const cwShow = (id) => {
  return axios({
    url: apiUrl + '/cheesewheels/' + id,
    method: 'GET'
  })
}
