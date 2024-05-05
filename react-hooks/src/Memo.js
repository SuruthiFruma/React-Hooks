import React,{useMemo, useState} from 'react'
import Title from './Child-Components/Title'
function Memo() {
    const [val,setVal]=useState(0)
    // const obj=useMemo(()=>{
    //   return { a:1}
    // },[])
    const obj=useMemo(()=>({a:1}),[])
  return (
    <div>
        <Title obj={obj}></Title>
      <input value={val} onChange={e=>setVal(e.target.value)}/>
    </div>
  )
}

export default Memo
