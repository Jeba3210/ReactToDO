import React, {useEffect, useState} from 'react'

const Task = ({task1 , desc1, id , deleteTask, editTask, index1, implementSubmit }) => {
  // const [myTask, setMyTask] = useState(task);
  const [task,setTask] = useState(task1);
  const [desc,setDesc] = useState(desc1);
  const [isCompleted, setIsCompleted] = useState(false);

  // console.log(id);
  

  // useEffect(()=>{
  //   setIsCompleted(task.isCompleted)
  // },[])
    
  return (
    <div>
       {/* <h1> Todo </h1>
             <form onSubmit={implementSubmit}>
                <label htmlFor='task'>Your Task</label>
                <input type="text" id='task'
                 placeholder='Enter your task'
                 onChange={e =>setTask(e.target.value)}
                value={task}
                 />
                <label htmlFor='description'>Description</label>
                <input type="text"
                 id='description' 
                 placeholder='Describe your task'
                onChange={e => setDesc(e.target.value)}
                value={desc}
                 />
                <button>Submit</button>
             </form>  */}

       {(task !== "" && desc !== "" ) && <li>
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
            <button onClick={()=>editTask(index1)}>Edit</button>
        </li>}

    </div>
    
  )
}


export default Task