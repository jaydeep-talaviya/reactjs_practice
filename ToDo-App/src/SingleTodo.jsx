import React, { useEffect, useState } from 'react'

function SingleTodo({todo,handleEdit,removeTodo}) {
  const [currentTodo,setCurrentTodo] = useState({})
  const [isEdit,setIsEdit] = useState(false);
  // change edit singletodo to input bar to change new txt and send it to todo list

  
  useEffect(()=>{
    setCurrentTodo(todo)
  },[todo])

  const handleInput=(Newtext)=>{
      setCurrentTodo({...currentTodo,text:Newtext})
  }

  const handleEditToggle=()=>{
    setIsEdit(!isEdit)
    console.log(currentTodo,">>>>>>>currentTodo")
  }

  const handleSubmit=()=>{
    console.log(currentTodo,"handleEditToggle")
    handleEdit(currentTodo)
    setIsEdit(!isEdit)
    
  }



  return (
    <li class="list-group-item list-group-item-info d-flex justify-content-between">
      <span>
        {isEdit?
        <input type="text" class="form-control border border-1" onChange={(e)=>handleInput(e.target.value)} value={currentTodo.text} name='todo' id="todo" placeholder="update todo..."/>

        :
        todo.text}
      </span>
      <span>
        {isEdit?
        <button className='btn btn-primary btn-sm' onClick={()=>handleSubmit()}>
          Submit
        </button>
        :
        <button className='btn btn-primary btn-sm' onClick={()=>handleEditToggle()}>
          Edit
          </button>

        }
  

          
        <button className='btn btn-danger btn-sm' onClick={()=>removeTodo(currentTodo.id)}>Remove</button>
      </span>
      </li>

  )
}

export default SingleTodo