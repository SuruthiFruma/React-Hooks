import React from 'react'

function Title() {
  console.log("Rendering title")
  return (
    <div>
      This is a title component
    </div>
  )
}

export default React.memo(Title)
