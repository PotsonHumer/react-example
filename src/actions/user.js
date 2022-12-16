import { loginSendAjax } from '../remotes/login'

/**
 * 會員登入 action
 */
export const loginSendAction = () => {
  return async (dispatch, getState) => {
    const { account, password } = getState()
    const user = await loginSendAjax({ account, password })
    dispatch({ type: 'SET_ALL', value: user })
  }
}
