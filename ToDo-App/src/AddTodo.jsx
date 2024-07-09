import React, { useState } from 'react'
import CommonLayer from './CommonLayer'

function AddTodo({handleAdd}) {
    
  const [newTodo,setNewTodo]=useState('')

  const handleChange=(text)=>{
    setNewTodo(text)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if (newTodo.length > 0){
      handleAdd(newTodo)
      setNewTodo('')
    }
    
  }

  return (
    <CommonLayer>
        <form onSubmit={(e)=>handleSubmit(e)} class="mb-3">
            <label for="todo" className="form-label fw-bold ps-2">Add Todo</label>
            <input type="text" onChange={(e)=>handleChange(e.target.value)} value={newTodo} class="form-control border border-1" id="todo" placeholder="add new todo..."/>
            <button type='submit' className='btn btn-primary mt-2'>Add</button>
        </form>
    </CommonLayer>
  )
}

export default AddTodo