

//USEIMPERATIVE HANDLE HELPS CALLING THE CHILD METHOD IN PARENT AFTER BINDS IT WITH PARENT REF

import React, { useRef } from 'react'
import UseImperativeHandleChild from './Child-Components/UseImperativeHandleChild'

function UseImperativeHandleParent() {
  let inputRef=useRef(null)
  return (
    <div>
      <button onClick={()=>inputRef.current.alert()}> Click to focus  </button>
      <UseImperativeHandleChild ref={inputRef}></UseImperativeHandleChild>
    </div>
  )
}

export default UseImperativeHandleParent




