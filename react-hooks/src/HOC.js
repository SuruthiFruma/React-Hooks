import React from 'react'

function HOC(Comp) {
  return ({rate})=>{
    return (
        <div>
           {rate==1?
           <>**********<Comp></Comp></>
           :
           <Comp></Comp>
           }
        </div>
    )
  }
}

export default HOC
