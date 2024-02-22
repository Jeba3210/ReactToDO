import React, {useEffect, useState} from 'react'
import "./task.css"

const Task = ({task , desc, id , deleteTask, editTask, isCompleted , setIsCompleted}) => {
  
    // useEffect(()=>{
    //   setIsCompleted(task.isCompleted)
    // },[])
      
  return (
    <div className='showDetails'>
      
       {/* {(task !== "" && desc !== "" ) &&  */}
       
        <div className="check">
            <input checked={isCompleted}
                  type="checkbox"
                  onChange={()=>setIsCompleted(!isCompleted)} 
            />
        </div>
        <div className="task">
            Task :   
            {task}
        </div>
           <div className="desc">
              Description:
              {desc}
           </div>
            
            <div className="delete"> <button className='deleteBtn' onClick={()=>deleteTask(id)}>Delete</button></div>
           <div className="edit"><button className='editBtn' onClick={()=>editTask(id)}>Edit</button></div>
            
      

    </div>
    
  )
}


export default Task