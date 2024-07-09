import React, { useState } from 'react'
import AddTodo from './AddTodo'
import RenderTodo from './RenderTodo'

function MainContainer() {

  const [todos,setTodos] = useState([{id:1,"text":"hello world"}])

  const handleAdd=(newTodo)=>{
    setTodos([...todos,{id:todos.length+1,text:newTodo}])
  }

  const removeTodo=(id)=>{
    const existedTodos = todos.filter((x)=>x.id !== id)
    setTodos(existedTodos)
  }

  const handleEdit=(updatedTodo)=>{
    console.log(">>>>>>>updatedTodo",updatedTodo)
    const updatedTodos = todos.map(todo =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );

    setTodos(updatedTodos)
  }

  return (
    <div className="container">
        <div className='row'>
            <div className='col-md-6 border border-2  pb-2'>
                <h3>Add New To-do</h3>
                <AddTodo handleAdd={handleAdd}/>
            </div>
            <div className='col-md-6 border border-2  pb-2'>
                <h3>List of Todo</h3>
              <RenderTodo todos={todos} handleEdit={handleEdit} removeTodo={removeTodo}/>
            
            </div>
        </div>
    </div>
  )
}

export default MainContainer