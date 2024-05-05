import { DashBoardContext } from "./DashboardContext";
import React,{useState} from 'react'
import Dashboard from "./Dashboard";

function UseContext() {
    const [contactObj,setContactObj]=useState({
        name:'Shruthi',
        age:24
    })
    return ( 
        <div>
            <DashBoardContext.Provider value={{contactObj,setContactObj}}>
                <Dashboard></Dashboard>
            </DashBoardContext.Provider>

        </div>
    )
}

export default UseContext
