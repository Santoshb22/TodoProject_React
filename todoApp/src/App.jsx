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

  return (
   <>
   <div className={styles.todoAppContainer}>
   <TodoHeading/>
   <TodoInput onNewTodoItems = {handleNewTodoItems} />
   <TodoItems todoArrayItems = {todoItems}/>
   </div>
   </>
  )
}

export default App