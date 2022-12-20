import React, { useEffect } from 'react'
import Menu from '../sub/menu'

const Home = (props) => {
  useEffect(() => {
    console.log('home?')
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <>
      <h1>Hello World !</h1>
      <Menu />
      <p>Start making some magic happen!</p>
    </>
  )
}

export default Home
