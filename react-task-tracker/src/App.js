import {useState} from 'react'
import Header from './component/Header'
import Tasks from './component/Tasks'
import AddTask from './component/AddTask'
function App() {
    const [tasks,setTasks] = useState([
    {
        id: 1,
        text: "Hello",
        day: "Sunday",
        reminder: true
    },
    {
        id: 2,
        text: "Hello",
        day: "Sunday",
        reminder: true
    },
    {
        id: 3,
        text: "Hello",
        day: "Sunday",
        reminder: false
    },
])

//Add Task
const addTask = (task) =>{
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id , ...task}
    setTasks([...tasks,newTask])
}

//Delete Tasks
const deleteTasks = (id) =>{
    setTasks(tasks.filter((task) =>task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>task.id === id ? {...task,reminder:!task.reminder}:task))
}

    return (
        <div className="container">
            <Header title = 'Task Traker'/>
            <AddTask onAdd = {addTask}/>
            {tasks.length > 0 ? (<Tasks tasks = {tasks} onDelete = {deleteTasks} onToggle ={toggleReminder}/>) : ('Text something on here')}
        </div>
      );
}


export default App;
