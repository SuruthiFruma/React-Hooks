import React,{useDeferredValue, useState} from 'react'
import SlowList from './SlowList'


//USED TO ACHIEVE DEBOUNCING EFFECT. GIVES STALE DATE UNTIL STOPPED TYPING

function UseDeferredValue() {
    const [val,setval]=useState('')
    let deferredValue=useDeferredValue(val)
  return (
    <div>
      <input value={val} onChange={(e)=>setval(e.target.value)}></input>
      <SlowList value={deferredValue}></SlowList>
    </div>
  )
}

export default UseDeferredValue



