import React, { useState } from 'react'
import styles from './TodoInput.module.css'

const TodoInput = ({onNewTodoItems}) => {

  const [addTodoName, setAddTodoName] = useState("");
  const [addTodoDate, setAddTodoDate] = useState("");

  const handleAddTodoName = (e) => {
     setAddTodoName(e.target.value)
  }

  const handleAddTodoDate = (e) => {
    setAddTodoDate(e.target.value)
 }
  const handleAddTodo =() => {
    onNewTodoItems(addTodoName, addTodoDate)
    setAddTodoName(""); 
    setAddTodoDate("");
  }
  return (
    <>
    <div className={styles.todoInput}>
        <input className={styles.input} type="text" onChange={handleAddTodoName} value={addTodoName} />
        <input className={styles.inputDate} type="date" name="datetime" id="datetime" onChange={handleAddTodoDate} value={addTodoDate}/>
        <button className={styles.addButton} onClick={handleAddTodo} >Add</button>
    </div>
    </>
  )
}

export default TodoInput