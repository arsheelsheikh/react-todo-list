import React from 'react'

const EditTodoForm = () => {
  return (
    <form className='TodoForm'>
        <input type="text" className='todo-input' placeholder='What is the task todau?'></input>
        <button type='submit' className='todo-btn'></button>
    </form>
  )
}

export default EditTodoForm