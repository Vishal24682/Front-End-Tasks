import { useState } from "react";
const Todo = () => {
    const[input,setInput] = useState('');
    const[todolist,setTodoList] = useState([]);
    const handleAdd = () => {
        const add = {
           id:todolist.length + 1,
           text:input,
           done:false,
        }
        setTodoList(prev=> [...prev,add]);
        setInput('');
    }
    const deleteItem = (id) =>{
        setTodoList(todolist.filter((t)=> t.id !== id));
    

    }
    return(
        <div>
            <input type="text" className="inputbox" placeholder="Enter Todo" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button className="add" onClick={()=>handleAdd()}>Add</button>
            <ul>
            {todolist.map((t)=><li key={t.id}>
            <input className = "checkbox" type="checkbox"/>
            <span className="span">{t.text}</span>
            <button className="delete" onClick={() => deleteItem(t.id)}>Delete</button>
            </li>
            )}
                
            </ul>
            
                
                
                
          
        </div>
    )
}
export default Todo;