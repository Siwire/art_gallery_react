import { LOGIN_USER, LOGOUT_USER } from "./signupTypes"

const initialState = {
  currentUser: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      console.log(action, 'vccvcvvcb');
      
      return { ...state, currentUser: action.payload }
    case LOGOUT_USER:
      return { ...state, currentUser: {} }
    default:
      return state;
  }
}

