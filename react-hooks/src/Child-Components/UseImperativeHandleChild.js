import React, { useImperativeHandle,useState } from 'react'
import UseImperativeHandleParent from '../UseImperativeHandleParent'

function UseImperativeHandleChild(props,ref) {
    const [val,setVal]=useState('')
    useImperativeHandle(ref,()=>{
        return {alert:()=>alert(val)}
    })
  return (
    <div>
      <input value={val} onChange={(e)=>setVal(e.target.value)} ></input>
    </div>
  )
}

export default React.forwardRef(UseImperativeHandleChild)

