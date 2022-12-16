import React, { useContext } from 'react'
import { userContext } from '../stores/context'
import { Link } from 'react-router-dom'
import Menu from '../sub/menu'
import Form from '../sub/form'

const User = (props) => {
  const { account, password, setAccount, setPassword, token } = useContext(
    userContext
  )

  if (token === '') {
    return (
      <>
        <h1>User</h1>
        <Menu />
        <p>Please login first.</p>
        <Link to='/login'>Go to Login</Link>
      </>
    )
  }

  return (
    <>
      <h1>User</h1>
      <Menu />
      <div style={{ textAlign: 'center' }}>
        <form>
          <Form isEdit {...{ account, password, setAccount, setPassword }} />
          <button type='button' style={{ marginLeft: 10 }}>
            登出
          </button>
        </form>
      </div>
    </>
  )
}

export default User
