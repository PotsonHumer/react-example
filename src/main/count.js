import React, { useState } from 'react'
import Menu from '../sub/menu'
import { parseDecimal } from '../sub/count'

const Count = (props) => {
  const [number, setNumber] = useState(0)

  return (
    <>
      <h1>Count</h1>
      <Menu />
      <div>
        <input
          value={number}
          onChange={(e) => setNumber(parseDecimal(e.target.value))}
          style={{ marginRight: 10 }}
        />
        <button
          type='button'
          onClick={() => setNumber(parseDecimal(number) + 1)}
          style={{ marginRight: 2 }}
        >
          + 1
        </button>
        <button type='button'>- 1</button>
      </div>
    </>
  )
}

export default Count
