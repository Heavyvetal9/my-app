import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = 'All' | 'Active' | 'Complete';

function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false}
    ])

    let [filter, setFilter] = useState<FilterValuesType>('All')

    function removeTask(id: string) {
        // let filteredTasks = tasks.filter((t) => t.id !== id)
        // setTasks(filteredTasks)
    }

    function addTasks(title: string) {
        let newTask = {
            id: v1(),
            title: title,
            isDone: false}
        let newTasks = [...tasks, newTask]
        setTasks(newTasks)
    }

    function changeStatus (tId:string, isDone: boolean) {
        let task = tasks.find(t=> t.id === tId)
        if (task) {
            task.isDone= isDone;
        }
        setTasks([...tasks])

    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodolist = tasks;
    if (filter === 'Complete') {
        tasksForTodolist = tasks.filter(t => t.isDone)
    }
    if (filter === 'Active') {
        tasksForTodolist = tasks.filter(t => !t.isDone)
    }


    return (
        <div className="App">
            <Todolist title={'What to learn'}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTasks}
                      changeTaskStatus={changeStatus}
                      filter={filter}
            />
        </div>
    );
}

export default App;
