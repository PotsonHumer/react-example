const apiPath = 'https://6399770716b0fdad773d886d.mockapi.io/api/'

/**
 * 會員登入 ajax
 * @param {object} param0 帳號密碼輸入
 * @returns {object} promise
 */
export const loginSendAjax = async ({ account, password }) => {
  try {
    const response = await fetch(`${apiPath}login`, {
      method: 'POST',
      body: JSON.stringify({ account, password }),
      headers: {
        'content-type': 'application/json'
      }
    })

    return await response.json()
  } catch (error) {
    console.log(error)
    return {}
  }
}

/**
 * 會員登入 - promise
 * @param {object} param0 帳號密碼輸入
 * @param {object} param1 狀態更新函式
 */
export const loginSend = (
  { account, password },
  { setToken, setAccount, setPassword }
) => {
  fetch(`${apiPath}login`, {
    method: 'POST',
    body: JSON.stringify({ account, password }),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then((repsonse) => repsonse.json())
    .then((data) => {
      setAccount(data.account)
      setPassword(data.password)
      setToken(data.token)
    })
    .catch((error) => console.log(error))

  // loginSendAjax({ account, password })
  //   .then((data) => {
  //     setAccount(data.account);
  //     setPassword(data.password);
  //     setToken(data.token);
  //   })
  //   .catch((error) => console.log(error));
}

/**
 * 會員登入 - async await 版本
 * @param {object} param0 帳號密碼輸入
 * @param {object} param1 狀態更新函式
 */
export const loginSendAsync = async (
  { account, password },
  { setToken, setAccount, setPassword }
) => {
  const user = await loginSendAjax({ account, password })
  setAccount(user.account || '')
  setPassword(user.password || '')
  setToken(user.token || '')
}
