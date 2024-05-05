import React, { useEffect } from 'react'
import { useRef,useState } from 'react'
function UseRef() {
// *********REF VARIABLES SURVIVES A RERENDER AND DOESNT CAUSE A RERENDER ALSO


    // const testRef = useRef(null)
    // testRef.current = "Test started"
    // const docRef = useRef(null)
    // useEffect(() => {
    //     docRef.current.value = "Please enter something"
    // }, [])
    // return (
    //     <div>

    //         {console.log(testRef.current)}
    //         <input ref={docRef} placeholder='Enter name'></input>
    //         {console.log(docRef)}

    //     </div>
    // )
    let timerRef=useRef(null)
    useEffect(()=>{
        timerRef.current=setInterval(()=>console.log("HI",Math.random()),3000)
    },[])
return(
    <div>
        <button onClick={()=>clearInterval(timerRef.current)}> Stop timer</button>
    </div>
)


}

export default UseRef
