import TodoHeading from "./Components/TodoHeading"
import TodoInput from "./Components/TodoInput"
import TodoItems from "./Components/TodoItems"
import styles from "./App.module.css"
import { useState } from "react"

function App() {

  const [todoItems, setTodoItems] = useState([])

  const handleNewTodoItems = (newTodoName, newTodoDate) => {
   console.log(`name: ${newTodoName} date: ${newTodoDate}`)
   const getValues = [
    ...todoItems,
    {
      todo: newTodoName,
      date: newTodoDate
    },
   ]
   setTodoItems(getValues)

   console.log(getValues)

  }

 function handleDeleteitems(deletedItem) {
  const newTodoItems = todoItems.filter((items) => items.todo !== deletedItem)

  setTodoItems(newTodoItems)
 }

  return (
   <>
   <div className={styles.todoAppContainer}>
   <TodoHeading/>
   <TodoInput onNewTodoItems = {handleNewTodoItems} />
   <TodoItems todoArrayItems = {todoItems} onDeleteItems = {handleDeleteitems} />
   </div>
   </>
  )
}

export default App