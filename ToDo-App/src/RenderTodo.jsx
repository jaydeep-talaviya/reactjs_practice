import React from 'react'
import SingleTodo from './SingleTodo'

function RenderTodo({todos,handleEdit,removeTodo}) {
    

  return (
    <div>
        <ul class="list-group">
            {
            todos.length > 0?

            todos.map((todo,i)=>{
                return <SingleTodo todo={todo} handleEdit={handleEdit} removeTodo={removeTodo} key={i}/>
            })
            :
            <li class="list-group-item list-group-item-danger">No Any Todo Found</li>

        }
        </ul>
    </div>
  )
}

export default RenderTodo