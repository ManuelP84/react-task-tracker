import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";

function App() {

  const name = 'Manuel'
  const isValid = false
  const number = 37

  const [showAddTask, setShowAddTask] = useState(false) 

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Finish React course',
        dateTime: 'Feb 6th at 2:00pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Finish Springboot course',
        dateTime: 'Feb 10th at 4:00pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Start MySQL',
        dateTime: 'May 6th at 10:00am',
        reminder: false
    },
    {
        id: 4,
        text: 'Java Quiz',
        dateTime: 'May 1th at 5:00pm',
        reminder: false
    }
])

//Delete Task
const deleteTask = (id)=>{
  setTasks(tasks.filter((task) =>{
    return task.id !== id
  }))
}

//Add Task
const addTask = (task) =>{
  const id = Math.floor(Math.random()*10000) + 1
  const newTask = {id, ...task}
  console.log(newTask)
  setTasks([...tasks, newTask])
}

const onToggle =(id) =>{
  setTasks(tasks.map((task) =>{
    return task.id === id ? {...task, reminder: !task.reminder} : task
  }))
}

const changeShowTask = () =>{
  setShowAddTask(!showAddTask)
}

  return (
    <div className="container">
      <Header title={'Task Tracker'} onAdd={changeShowTask} showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={onToggle}/>) : ('No tasks to show!')}      
    </div>
  );
}



export default App;
