import React from 'react'

const Form = (props) => {
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 5 }}>
          <span>帳號：</span>
          <input
            type='text'
            value={props.account}
            required
            onChange={(e) => props.setAccount(e.target.value)}
          />
        </div>
        <div>
          <span>密碼：</span>
          <input
            type='password'
            value={props.password}
            required
            onChange={(e) => props.setPassword(e.target.value)}
          />
        </div>
      </div>
      <button type='submit'>{props.isEdit ? '更新資料' : '登入'}</button>
    </>
  )
}

export default Form
