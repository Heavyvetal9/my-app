import React, {ChangeEvent, useState} from "react";
import {IconButton, TextField} from "@mui/material";
import {ControlPoint} from "@mui/icons-material";

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
        <TextField value={newTaskTitle}
                   label={'Type value'}
                   onChange={onNewTitleChangeHandler}
                   onKeyUp={onKeyUpHandler}
                   error={!!error}
                   helperText={error}
        />
        <IconButton onClick={addTask} color={"primary"}>
            <ControlPoint/>
        </IconButton>
    </div>
}