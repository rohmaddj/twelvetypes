const INITIAL_STATE = {
  isSignedIn: false,
  username: "",
  archetype: "",
  token: ""
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isSignedIn: true,
        username: action.username,
        archetype: action.archetype,
        token: action.token
      }
    case 'SIGN_OUT':
        return { ...state, isSignedIn: false }
    case 'UPDATE_USER':
      return {
        ...state,
        username: action.username,
        archetype: action.archetype,
        token: action.token
      }
    default:
      return state
  }
}