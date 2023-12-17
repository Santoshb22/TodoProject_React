import React from 'react'
import styles from './TodoInput.module.css'

const TodoInput = () => {
  return (
    <>
    <div className={styles.todoInput}>
        <input className={styles.input} type="text" />
        <input className={styles.inputDate} type="date" name="datetime" id="datetime" />
        <button className={styles.addButton} >Add</button>
    </div>
    </>
  )
}

export default TodoInput