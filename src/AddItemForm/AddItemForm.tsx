import React, {ChangeEvent, useState} from "react";
import {IconButton, TextField} from "@mui/material";
import {ControlPoint} from "@mui/icons-material";
import {useAddItemForm} from "./hooks/useAddItemForm";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm = React.memo((props: AddItemFormPropsType) => {

const {newTaskTitle,
    error,
    onKeyUpHandler,
    onNewTitleChangeHandler,
    addTask} =useAddItemForm(props.addItem)
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
})