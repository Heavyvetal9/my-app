import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    let task1 = [
        {id: 1, title: 'CSS', isDone: true},
        {id: 1, title: 'JS', isDone: true},
        {id: 1, title: 'React', isDone: false}
    ]
    let task2 = [
        {id: 1, title: 'Term', isDone: true},
        {id: 1, title: 'XXX', isDone: true},
        {id: 1, title: 'Forum', isDone: false}
    ]

    return (
        <div className="App">
            <Todolist title={'What to learn'} tasks={task1}/>
            <Todolist title={'Movie'} tasks={task2}/>
        </div>
    );
}

export default App;
