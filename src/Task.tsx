import React, {ChangeEvent} from "react";
import {Checkbox, IconButton} from "@mui/material";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@mui/icons-material";
import {TaskType} from "./Todolist";

type TaskPropsType = {
    removeTask: (id: string, todolistId: string) => void
    changeTaskStatus: (tId: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (tId: string, newTitle: string, todolistId: string) => void
    task: TaskType
    todolistId: string
}
export const Task = (props: TaskPropsType) => {
    const onRemoveHandler = () => props.removeTask(props.task.id, props.todolistId)
    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(props.task.id, e.currentTarget.checked, props.todolistId)
    const onChangeTitleHandler = (newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue, props.todolistId)
    }

    return <div key={props.task.id}
                className={props.task.isDone ? 'is-done' : ''}>
        <Checkbox checked={props.task.isDone}
                  onChange={onChangeStatusHandler}/>
        <EditableSpan title={props.task.title}
                      onChange={onChangeTitleHandler}/>
        <IconButton onClick={onRemoveHandler}>
            <Delete/>
        </IconButton>
    </div>
}