import {useState} from 'react'
import Header from './component/Header'
import Tasks from './component/Tasks'
import AddTask from './component/AddTask'

function App() {
    const [showAddTask,setshowAddTask] =useState(false)

    const[tasks,setTasks] =useState(
        [{
            id:1,
            text:"Hello Becky",
            day:"Thursday Morning",
            reminder:true
        },
        {
            id:2,
            text:"Hello Becky",
            day:"Thursday Morning",
            reminder:true
        },
        {
            id:3,
            text:"Hello Becky",
            day:"Thursday Morning",
            reminder:false
        }]
    )

    //Toggle DoubleClick
    const toggle = (id) =>{
        setTasks(tasks.map((task)=>task.id === id ? {...task,reminder:!task.reminder}:task))
    }
    //Delete
    const deleteButton = (id) => {
        setTasks(tasks.filter((task) => task.id !== id ))
    }
//Add Button
 const add = (task) =>{
     const id = Math.floor(Math.random()*1000)+1
     const newTask = {id,...task}
     setTasks([...tasks,newTask])
 }

    return (
        <div className="container">
            <Header onAdd ={() => setshowAddTask(!showAddTask)} showAddTask ={showAddTask}/>
            {showAddTask ? <AddTask onAdd ={add}/> :""}
            {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggle} onDelete ={deleteButton}/> : ("Text some list")}
        </div>
      );
}


export default App;
