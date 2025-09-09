import React, {ChangeEvent, useState} from "react";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [error, setError] = useState<string | null>(null)
    const onNewTitleChangeHandler =
        (e: ChangeEvent<HTMLInputElement>) => {
            setNewTaskTitle(e.currentTarget.value)
        }
    const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        // if (e.charCode ===13) {
        //     addTask()
        // }
        {
            if (e.key === 'Enter') {
                props.addItem(newTaskTitle);
                setNewTaskTitle('')
            }
        }
    }
    const addTask = () => {
        if (newTaskTitle.trim() !== '') {
            props.addItem(newTaskTitle.trim());
            setNewTaskTitle('')
        } else {
            setError('Title is required')
        }
    }

    return <div>
        <input value={newTaskTitle}
               onChange={onNewTitleChangeHandler}
               onKeyUp={onKeyUpHandler}
               className={error ? 'error' : ''}
        />
        <button onClick={addTask}>+</button>
        {error && <div className='error-message'>{error}</div>}
    </div>
}