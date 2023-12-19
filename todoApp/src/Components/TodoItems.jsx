import React from 'react'
import styles from './TodoItems.module.css'

const TodoItems = ({todoArrayItems, onDeleteItems}) => {



  return (
    <>
    <div className="todo-items-container">
     {
        todoArrayItems.map((items) =>
        <div className={styles.todoItems} key={items.todo}>
         <p className={styles.todoItem} >{items.todo}</p>
         <span>{items.date}</span>
         <button className={styles.deleteButton} onClick={() => {
          onDeleteItems(items.todo)
            }
         } >Delete</button>
        </div>
       )
     }
    </div>
    </>
  )
}

export default TodoItems