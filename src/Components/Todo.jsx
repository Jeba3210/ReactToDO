import React , {useEffect, useState} from 'react';
import Task from './Task';
import { v4 as uuid } from 'uuid';

// const initialTask = { : "", des : "", isCompleted : false, key : ""};
function Todo(){
    // const [task,setTask] = useState("");
    // const [desc,setDesc] = useState("");
    // const [isCompleted, setIsCompleted] = useState(false);
    const [details,setDetails] = useState([]);
    // const [task, setTask] = useState(initialTask);

//    console.log(task);
//     useEffect(()=>{

    //     },[])

    const [task,setTask] = useState('');
    const [desc,setDesc] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    const[index , setIndex] = useState(0)

    function implementSubmit(e) {
        e.preventDefault();
        setIndex(index+1);
        console.log(index);
        const taskWithKey = {
            task,
            desc,
            isCompleted,
            index,
            key: uuid()};
        setDetails([...details,taskWithKey]);

        // setArr([...arr , task , task.key : uuid()])
        // setTask(initialTask);
        setTask('');
        setDesc('');

    }

    function deleteTask(key){
        const updatedDetails = details.filter(task => task.key !== key);
        console.log(updatedDetails)
        setDetails(updatedDetails);

        console.log(details);   
    }

    function editTask(e ,index){
       const newtask = prompt("Enter new task");
       console.log(newtask);
      
       const newDesc = prompt("Enter new description");
       console.log(newDesc);

       details[index].task = newtask;
       details[index].desc = newDesc

    //    const newDetails = [...details];

    //    newDetails[index].task = newtask;
    //    setTask(newDetails[index].task );
    //    newDetails[index].desc = newDesc;
    //    setDesc(newDetails[index].desc );

    //    setDetails(newDetails);
    //    console.log(newDetails[index].task);
    //    newDetails[index] = setTask(newtask);

    // if(task.key == key){setDetails([...details , newtask, newDesc])};
    
       
    }
   


    return(
        <div>
            <h1> Todo </h1>
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
             </form> 

            
                <ul>
                {details.map((task) =>{
                    return (
                        <Task key={task.key} id={task.key} index1={task.index} task1={task.task} desc1={task.desc} isCompleted={isCompleted}  deleteTask={deleteTask} editTask={editTask} implementSubmit={implementSubmit}/>
                      
                       )
                })}
           </ul>
         
         </div>
    )
}

export default Todo ;