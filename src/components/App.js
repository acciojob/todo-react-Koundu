
import React,{useState} from "react";
import Task from "./Task";
import './../styles/App.css';



const App = () => {
  const [todo,setTodo] = useState("");
  const [todoList,setTodoList] = useState([]);

  function implementAddTodo(e){
      e.preventDefault();
      setTodoList([...todoList, todo])
      setTodo("")
  }

  function handleDelete(index){
    setTodoList(todoList.filter((value,position)=> position !== index))    
  }



  return (
    <div>
        {/* Do not remove the main div */}
        <p>To-Do List</p>
        <form id="input" onSubmit={implementAddTodo}>
            <input type="text" placeholder="Enter the Task" onChange={(e) =>{setTodo(e.target.value)}} value={todo}></input>
            <button>Add Todo</button>
        </form>
        {
          todoList.map((item,index) =>{
            return(
              <ul>
                <div>
                <li>
                  {item}
                  <button onClick={()=>handleDelete(index)}>Delete</button>
                </li>
                </div>
              </ul>
          )})
        }
    </div>
  )
}

export default App
