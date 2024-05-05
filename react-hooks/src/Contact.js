import React,{useContext} from 'react'
import { DashBoardContext } from './DashboardContext'


function Contact() {
const {contactObj,setContactObj}=useContext(DashBoardContext)

  return (
    <div>
      This is contact
      <button onClick={()=>{
          setContactObj({...contactObj,name:'Fruma'})
      }}>Click to change user</button>
      {contactObj.name}
      {contactObj.age}
    </div>
  )
}

export default Contact
