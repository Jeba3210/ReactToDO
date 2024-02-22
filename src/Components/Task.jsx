import React, {useEffect, useState} from 'react'

const Task = ({task , desc, id , deleteTask, editTask, isCompleted , setIsCompleted}) => {
  
    // useEffect(()=>{
    //   setIsCompleted(task.isCompleted)
    // },[])
      
  return (
    <div>
      
       {/* {(task !== "" && desc !== "" ) &&  */}
       <li>
            <input checked={isCompleted}
              type="checkbox"
              onChange={()=>setIsCompleted(!isCompleted)} 
            />
              Task : 
              {task}
              <br />
              Description:
              {desc}
            <br />
            <button onClick={()=>deleteTask(id)}>Delete</button>
            <button onClick={()=>editTask(id)}>Edit</button>
        </li>

    </div>
    
  )
}


export default Task