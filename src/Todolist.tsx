import React, {ChangeEvent, useState} from "react";
import {FilterValuesType} from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeTaskStatus: (tId: string, isDone: boolean) => void
    filter: FilterValuesType

}

export function Todolist(props: PropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const onNewTitleChangeHandler =
        (e: ChangeEvent<HTMLInputElement>) => {
            setNewTaskTitle(e.currentTarget.value)
        }

    const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        {
            if (e.key === 'Enter') {
                props.addTask(newTaskTitle);
                setNewTaskTitle('')
            }
        }
    }
    const addTask = () => {
        if (newTaskTitle.trim() !== '') {
            props.addTask(newTaskTitle.trim());
            setNewTaskTitle('')
        } else {
            setError('Title is required')
        }
    }

    const onAllClickHandler = () => props.changeFilter('All')
    const onActiveClickHandler = () => props.changeFilter('Active')
    const onCompleteClickHandler = () => props.changeFilter('Complete')

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={onNewTitleChangeHandler}
                       onKeyUp={onKeyUpHandler}
                       className={error ? 'error' : ''}
                />
                <button onClick={addTask}>+</button>
                {error && <div className='error-message'>{error}</div>}
                <ul>
                    {
                        props.tasks.map(t => {
                                const onRemoveHandler = () => props.removeTask(t.id)
                                const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(t.id, e.currentTarget.checked)

                                return (
                                    <li key={t.id}
                                        className={t.isDone ? 'is-done' : ''}>
                                        <input type="checkbox"
                                               checked={t.isDone}
                                               onChange={onChangeHandler}/>
                                        <span>{t.title}</span>
                                        <button onClick={onRemoveHandler}>x
                                        </button>
                                    </li>)
                            }
                        )
                    }
                </ul>
                <div>
                    <button className={props.filter === 'All' ? 'active-filter' : ''} onClick={onAllClickHandler}>All
                    </button>
                    <button className={props.filter === 'Active' ? 'active-filter' : ''}
                            onClick={onActiveClickHandler}>Active
                    </button>
                    <button className={props.filter === 'Complete' ? 'active-filter' : ''}
                            onClick={onCompleteClickHandler}>Complete
                    </button>
                </div>
            </div>
        </div>
    )
}