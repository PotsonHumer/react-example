import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import Home from './main/home'
import About from './main/about'
import Count from './main/count'
import ClassComponent from './main/class-component'
import Login from './main/login'
import LoginRedux from './main/login-redux'
import User from './main/user'

import userReducer from './reducers/user'
import { defaultUser, userContext } from './stores/context'

const userStore = configureStore({
  reducer: userReducer
})

const App = () => {
  const [account, setAccount] = useState(defaultUser.account)
  const [password, setPassword] = useState(defaultUser.password)
  const [token, setToken] = useState('')

  return (
    <Provider store={userStore}>
      <userContext.Provider
        value={{ account, password, token, setAccount, setPassword, setToken }}
      >
        <div className='App'>
          <Router>
            <Routes>
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/count' element={<Count />} />
              <Route path='/class-component' element={<ClassComponent />} />
              <Route path='/login' element={<Login />} />
              <Route path='/login-redux' element={<LoginRedux />} />
              <Route path='/user' element={<User />} />
            </Routes>
          </Router>
        </div>
      </userContext.Provider>
    </Provider>
  )
}

export default App
