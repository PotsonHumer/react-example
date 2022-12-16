import React from 'react'
import Menu from '../sub/menu'
import { parseDecimal } from '../sub/count'

export default class ClassComponent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      number: 0
    }
  }

  render () {
    return (
      <>
        <h1>Class Component Count</h1>
        <Menu />
        <div>
          <input
            value={this.state.number}
            onChange={(e) =>
              this.setState({ number: parseDecimal(e.target.value) })}
            style={{ marginRight: 10 }}
          />
          <button
            type='button'
            onClick={() =>
              this.setState({ number: parseDecimal(this.state.number) + 1 })}
            style={{ marginRight: 2 }}
          >
            + 1
          </button>
          <button type='button'>- 1</button>
        </div>
      </>
    )
  }
}
