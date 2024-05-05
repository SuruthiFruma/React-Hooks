import React, { useState, useTransition } from 'react'


// ANY PROCESS GIVEN DURING THE START TRANSITION CALLBACK IS OF LEAST PRIORITY 
// MAINLY USED WITH MULTIPLE BATCHING OF STATES


function UseTransition() {
    const [isP,start]=useTransition()
    const [val,setVal]=useState('')
    const [list,setList]=useState([])
    const setUI=(e)=>{
      setVal(e.target.value)
      start(()=>{
        let list=[]
        for(let i=0;i<=30000;i++){
           list.push(e.target.value)
        }
       setList(list)})
      
    }
  return (
    <div>
      <input value={val} onChange={(e)=>setUI(e)}></input>
      {isP? <>{"Loading"}</>:list.map((no,index)=>{
        return <div>{no}</div>
     })}
    </div>
  )
}

export default UseTransition


