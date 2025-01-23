import React from 'react'

function AddTodos() {
  return (
    <div>
        <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
            <input 
                type="text"
                className=''
            />
        </form>
    </div>
  )
}

export default AddTodos