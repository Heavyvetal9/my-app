import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../state/store";
import {useCallback} from "react";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "../state/tasks-reducer";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC
} from "../state/todolists-reducer";
import {FilterValuesType, TasksStateType, TodolistType} from "./AppWithRedux";

export const useAppWithRedux =()=>{
    const dispatch = useDispatch();
    const todolists = useSelector<AppRootState, Array<TodolistType>>(state => state.todolists)
    const tasksObj = useSelector<AppRootState, TasksStateType>(state => state.tasks)

    const removeTask = useCallback(function (id: string, todolistId: string) {
        dispatch(removeTaskAC(id, todolistId));
    }, [dispatch])

    const addTasks = useCallback(function (title: string, todolistId: string) {
        dispatch(addTaskAC(title, todolistId));

    }, [dispatch])

    const changeStatus = useCallback(function (id: string, isDone: boolean, todolistId: string) {
        dispatch(changeTaskStatusAC(id, isDone, todolistId));
    }, [dispatch])

    const changeTaskTitle = useCallback(function (id: string, newTitle: string, todolistId: string) {
        dispatch(changeTaskTitleAC(id, newTitle, todolistId));
    }, [dispatch])

    const changeFilter = useCallback(function (value: FilterValuesType, todolistId: string) {
        dispatch(changeTodolistFilterAC(value, todolistId))
    }, [dispatch])

    const removeTodolist = useCallback ((todolistId: string) => {
        const action = removeTodolistAC(todolistId);
        dispatch(action);
    },[dispatch])

    const changeTodolistTitle = useCallback(function (id: string, newTitle: string) {
        const action = changeTodolistTitleAC(id, newTitle);
        dispatch(action)
    }, [dispatch])

    const addTodolist = useCallback((title: string) => {
        const action = addTodolistAC(title);
        dispatch(action);
    }, [dispatch]);

    return {
        todolists,
        tasksObj,
        addTodolist,
        changeFilter,
        changeStatus,
        addTasks,
        removeTask,
        removeTodolist,
        changeTaskTitle,
        changeTodolistTitle,
    }

}