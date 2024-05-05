import React, { useRef } from 'react'
import ChildRef from './Child-Components/childRef'


//PASSING A REF AS A PROP FROM PARENT TO CHILD , FORWARD REF IS USED

//BASICALLY A CHILD TO PARENT COMMUNICATION FOR DOM MANIPULATION

//FORWARD REFFING IS SIMILAR TO LIFTING THE STATE UP FOR STATES. THIS IS FOR REFS

function ParentRef() {
    let inputRef=useRef(null)
  return (
    <div>
      <button onClick={()=>inputRef.current.focus()}> Focus input </button>
      <ChildRef ref={inputRef}></ChildRef>
      {console.log(inputRef)}
    </div>
  )
}

export default ParentRef
