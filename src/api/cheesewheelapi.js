import apiUrl from '../apiConfig'

import axios from 'axios'

export const cwCreate = (cheesewheel, user) => {
  return axios({
    url: apiUrl + '/cheesewheels',
    method: 'POST',
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

export const cwUpdate = (id, cheesewheel, user) => {
  return axios({
    url: apiUrl + '/cheesewheels/' + id,
    method: 'PATCH',
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

export const cwDelete = (id, user) => {
  return axios({
    url: apiUrl + '/cheesewheels/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
