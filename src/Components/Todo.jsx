import React , {useEffect, useState} from 'react';
import Task from './Task';
import { v4 as uuid } from 'uuid';

// const initialTask = { : "", des : "", isCompleted : false, key : ""};
function Todo(){

    const [details,setDetails] = useState([]);
  
        //     useEffect(()=>{
        //     },[])

    const [data,setData] = useState('');
    const [desc,setDesc] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);

    const [toggleSubmitBtn , setToggleSubmitBtn] = useState(true);
    const [ isEdit, setIsEdit] = useState(null);

    function implementSubmit(e) {
        e.preventDefault();
        if(!data || !desc){
            alert("Please fill the fields")
        }else if(data && desc && !toggleSubmitBtn){
             setDetails(details.map((task, e) => {
                if(task.key === isEdit){
                    return {...task , data : data,desc : desc}
                }
                return task;

             })
             )
             setToggleSubmitBtn(true);
             setIsEdit(null);
             setData('');
             setDesc('');
        }else{
            const taskWithKey = {
                data,
                desc,
                isCompleted,
                key: uuid()};
            setDetails([...details,taskWithKey]);
    
            setData('');
            setDesc('');
    
        }
        
    }

    function deleteTask(key){
        const updatedDetails = details.filter(task => task.key !== key);
        console.log(updatedDetails)
        setDetails(updatedDetails);

        console.log(details);   
    }

    function editTask(id){
      const newEditItem = details.find((task) => {
            return task.key == id;
       })
    //    console.log(newEditItem);
       setToggleSubmitBtn(false);
       setData(newEditItem.data);
       setDesc(newEditItem.desc);
       setIsEdit(id);
       console.log(isEdit);
       
    }
   


    return(
        <div>
            <h1> Todo </h1>
             <form onSubmit={implementSubmit}>
                <label htmlFor='task'>Your Task</label>
                <input type="text" id='task'
                 placeholder='Enter your task'
                 onChange={e =>setData(e.target.value)}
                value={data}
                 />
                <label htmlFor='description'>Description</label>
                <input type="text"
                 id='description' 
                 placeholder='Describe your task'
                onChange={e => setDesc(e.target.value)}
                value={desc}
                 />
                 {
                    toggleSubmitBtn ? <button>Submit</button> : <button>Update</button>
                 }
                
             </form> 

            
                <ul>
                {details.map((task) =>{
                    return (
                        <Task key={task.key} id={task.key} task={task.data} desc={task.desc} isCompleted={isCompleted} setIsCompleted={setIsCompleted} deleteTask={deleteTask} editTask={editTask} implementSubmit={implementSubmit}/>
                      
                       )
                })}
           </ul>
         
         </div>
    )
}

export default Todo ;