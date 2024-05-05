
import './App.css';
import React from 'react'
import { useReducer,useEffect } from 'react';
function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment': {
        return { ...state, count: action.payload }
      
      }
      case 'decrement': {
        return { ...state, count: state.count - 7 }
      }
      case 'reset': {
        return { ...state, count: 0 }
      }
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    count: 0
  })
  useEffect(() => {
    console.log("Counter state has changed")
  }, [state.count])
  return (
    <div>
      <button onClick={() => dispatch({ type: 'increment',payload:10 })}>Click to increase</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Click to decrease</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Click to reset</button>
      {state.count}
    </div>
  )
}

export default App;
