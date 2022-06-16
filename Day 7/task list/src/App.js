import React ,{useState} from 'react'

//import the bootstrap styles from node modules folder
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css';

//import the Task class
import { Task } from './models/tasks';

//importtask components from the comonents folder
import TaskInput from './components/TaskInput';
import TaskTable from './components/TaskTable';


export default function App ()  {
  
  const [tasks,setTask] = useState([])

  function oncreateTask(taskName){
    //create new task
    const task = new Task(
      new Date().getTime(),
      taskName,
      false,
      //something unique
    )

    //add the task to the task list
    
    // //METHOD 1
    // const newTasks = []
    // for(let i = 0;i<tasks.length;i++){
    //   newTasks.push(tasks[i])
    // }
    // newTasks.push(task)

    //METHOD 2
    //it should insert all the tasks in the old array and update it with the new task
    setTask([...tasks,task])
  }

  function onToggleComplete(taskId){
    //find task to toggle
    const taskToToggle = tasks.find((task) => task.id === taskId);

    // toggle task completed state
    taskToToggle.complete = !taskToToggle.complete;

    //update the task list state
    setTask(tasks.map((task) => {
      return task.id === taskId ? taskToToggle : task;
    }));

  }

  function onRemoveTask(taskId){
    // filter tasklist to remove task
    //update task list
    setTask(tasks.filter((task) => task.id !== taskId));
  
  }

  return (
    <div className='container my-4'>

      <div className='card card-body text-center'>

        <h1>Task List</h1>

        <hr></hr>

        <p>Our simple task list</p>

        <TaskInput oncreateTask={oncreateTask} />

        <TaskTable 
        onToggleComplete={onToggleComplete}
        onRemoveTask={onRemoveTask}
        tasks = {tasks}  />
      </div>
    </div>
  )
}

