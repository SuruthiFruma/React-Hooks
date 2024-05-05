import React from 'react'

function ChildRef(props,ref) {

  return (
    <div>
       <input ref={ref}></input>
    </div>
  )
}

export default React.forwardRef(ChildRef)
