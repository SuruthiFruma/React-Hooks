import React, { useEffect, useLayoutEffect, useState } from 'react'

function UseLayoutEffect() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("Useeffect called")
    })
    useLayoutEffect(()=>{
        console.log("Use Layout effect called")
    })
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Click to increase counter</button>
      {count}
    </div>
  )
}

export default UseLayoutEffect
