import React from 'react'
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './Actions/counterActions'

const App = (props) => {
  return (
    <>
      <div>
        <h1>Counter App</h1>
        <div>{props.count}</div>
        <div>
          <button onClick={() => props.incrementCounter(props.count + 1)}>+</button>
          <button onClick={() => props.decrementCounter(props.count - 1)}>-</button>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

export default connect(mapStateToProps, { incrementCounter, decrementCounter })(App)
