// import React,{useMemo,useState} from 'react'

// function UseMemo() {
//     const [val,setVal]=useState('')
//     const [count,setCount]=useState(0)
//     const printCount=useMemo(()=>{
//          for(let i=0;i<=5000;i++){
//             console.log(i)
//             if(i==4900){
//                 return count
//             }
//          }
//     },[count])
//   return (
//     <div>
//       <input value={val} onChange={e=>setVal(e.target.value)}></input>
//       <button onClick={()=>setCount(count+1)}>Counter</button>
//       {printCount}
//     </div>
//   )
// }

// export default UseMemo



import React, { useMemo,useState } from 'react'

function UseMemo() {
    const [val,setVal]=useState('')
    const [count,setCount]=useState(0)
    const printCount=useMemo(()=>{
        for(let i=0;i<1000;i++){
            console.log(i)
            if(i==999){
                return count
            }
        }

    },[count])
  return (
    <div>
       <input value={val} onChange={e=>setVal(e.target.value)}></input>
       <button onClick={()=>setCount(count+1)}> Count</button>
       {printCount}
    </div>

  )
}

export default UseMemo

