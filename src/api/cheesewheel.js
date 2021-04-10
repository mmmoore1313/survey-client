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
