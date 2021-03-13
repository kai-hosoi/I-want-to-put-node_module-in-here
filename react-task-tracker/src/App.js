import {useState} from 'react'
import Header from './component/Header'
import Tasks from './component/Tasks'
function App() {
    const [tasks,setTasks] = useState([
    {
        id: 1,
        text: "Hello",
        day: "Sunday",
        reminder: false
    },
    {
        id: 2,
        text: "Hello",
        day: "Sunday",
        reminder: false
    },
    {
        id: 3,
        text: "Hello",
        day: "Sunday",
        reminder: true
    },
])
    return (
        <div className="container">
            <Header title = 'Task Traker'/>
            <Tasks tasks = {tasks} />
        </div>
      );
}


export default App;
