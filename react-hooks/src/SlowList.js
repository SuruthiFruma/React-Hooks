import React from 'react'

function SlowList({value}) {
    let list=[]
    for(let i=0;i<=100000;i++){
        list.push(value)
    }
  return (
    <div>
      {list.map((val)=>{
        return <div>{val}</div>
      })}
    </div>
  )
}

export default SlowList



