import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../sub/menu'
import { defaultUser, userContext } from '../stores/context'
import { loginSend } from '../remotes/login'
import Form from '../sub/form'

const Login = (props) => {
  const navigate = useNavigate()
  const [account, setAccount] = useState(defaultUser.account)
  const [password, setPassword] = useState(defaultUser.password)
  const context = useContext(userContext)

  useEffect(() => {
    if (context.token !== '') {
      navigate('/user')
    }
  }, [navigate, context.token])

  return (
    <>
      <h1>Login</h1>
      <Menu />
      <div style={{ textAlign: 'center' }}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            loginSend({ account, password }, context)
          }}
        >
          <Form {...{ account, password, setAccount, setPassword }} />
        </form>
      </div>
    </>
  )
}

export default Login
