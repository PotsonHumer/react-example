import store from '../stores/user'

const userReducer = (initState = store, action) => {
  switch (action.type) {
    case 'SET_ACCOUNT':
      return Object.assign({}, initState, { account: action.value.account })

    case 'SET_PASSWORD':
      return Object.assign({}, initState, { password: action.value.password })

    case 'SET_TOKEN':
      return Object.assign({}, initState, { token: action.value.token })

    case 'SET_ALL':
      return Object.assign({}, initState, action.value)

    default:
      return initState
  }
}

export default userReducer
