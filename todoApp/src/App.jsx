import TodoHeading from "./Components/TodoHeading"
import TodoInput from "./Components/TodoInput"
import TodoItems from "./Components/TodoItems"
import styles from "./App.module.css"

function App() {

  let todoItems = [
    {
      id: "12A",
      todo: "Workout",
      date: "12/02/2024"
    },
    {
      id: "12B",
      todo: "Coding",
      date: "13/02/2024"
    },
    {
      id: "12C",
      todo: "Lunch",
      date: "13/02/2024"
    } 
  ]

  return (
   <>
   <div className={styles.todoAppContainer}>
   <TodoHeading/>
   <TodoInput/>
   <TodoItems todoArrayItems = {todoItems}/>
   </div>
   </>
  )
}

export default App