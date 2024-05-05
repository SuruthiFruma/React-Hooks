import React from 'react'
import Title from './Child-Components/Title'
import Home from './Home'
import HOC from './HOC'

function HigherOrderComponents() {
    const ModifiedTitle=HOC(Title)
    const ModifiedHome=HOC(Home)
  return (
    <div>
        <ModifiedHome rate='1'>
        </ModifiedHome>
        <ModifiedTitle>
        </ModifiedTitle>
    </div>
  )
}

export default HigherOrderComponents
