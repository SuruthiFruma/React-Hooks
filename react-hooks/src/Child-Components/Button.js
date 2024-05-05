import React from 'react'

function Button({handleClick}) {
    {console.log("Button Rendering")}
  return (
    <div>
      <button onClick={handleClick}> Counter</button>
    </div>
  )
}

export default React.memo(Button)
