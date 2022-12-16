import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Menu from '../sub/menu'
import Form from '../sub/form'
import { loginSendAction } from '../actions/user'

const LoginRedux = (props) => {
  const navigate = useNavigate()
  const user = useSelector((user) => user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (user.token !== '') {
      navigate('/user')
    }
  }, [navigate, user.token])

  return (
    <>
      <h1>Login Redux</h1>
      <Menu />
      <div style={{ textAlign: 'center' }}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            dispatch(loginSendAction())
          }}
        >
          <Form
            {...{
              account: user.account,
              password: user.password,
              setAccount: (account) =>
                dispatch({ type: 'SET_ACCOUNT', value: { account } }),
              setPassword: (password) =>
                dispatch({ type: 'SET_PASSWORD', value: { password } })
            }}
          />
        </form>
      </div>
    </>
  )
}

export default LoginRedux
