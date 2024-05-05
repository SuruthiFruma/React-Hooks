import React,{useState,useCallback} from 'react'
import Button from './Child-Components/Button'

function UseCallBack() {
    const [val,setVal]=useState('')
    const [count,setCount]=useState(0)
    // const handleClick=()=>{
    //     setCount(count+1)
    // }
    const handleClick=useCallback(()=>{
        setCount(count+1)
    },[count])
  return (
    <div>
      <input value={val} onChange={e=>setVal(e.target.value)}></input>
      <Button handleClick={handleClick}> </Button>
      {count}
    </div>
  )
}

export default UseCallBack
