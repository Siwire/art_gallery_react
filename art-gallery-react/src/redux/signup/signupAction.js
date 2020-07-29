import {
  LOGOUT_USER,
  LOGIN_USER
} from './signupTypes';

export const userPostFetch = user => {
  return dispatch => {
    return fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {


        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.username))
        }
      })
  }
}

const loginUser = userObj => ({
  type: LOGIN_USER,
  payload: userObj
})

export const userLoginFetch = user => {
  return dispatch => {
    return fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ user })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          //тут ваша логика
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser({ ...data, isAuthorized: true }))
        }
      })
  }
}
export const getProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:8000/profile", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            // Будет ошибка если token не дествительный
            localStorage.removeItem("token")
          } else {
            dispatch(loginUser({ ...data, isAuthorized: true }))
          }
        })
    }
  }
}
export const logoutUser = () => ({
  type: LOGOUT_USER
})

