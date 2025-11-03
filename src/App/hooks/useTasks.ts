import {useState} from "react";
import {todolistId1, todolistId2} from "../id-utils";
import {v1} from "uuid";
import {TasksStateType} from "../App";

export function useTasks() {
    let [tasksObj, setTasks] = useState<TasksStateType>({
        [todolistId1]: [
            {id: v1(), title: 'CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'React', isDone: false}],
        [todolistId2]: [
            {id: v1(), title: 'book', isDone: true},
            {id: v1(), title: 'milk', isDone: false}]
    })

    function removeTask(id: string, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let filteredTasks = tasks.filter((t) => t.id !== id);
        tasksObj[todolistId] = filteredTasks;
        setTasks({...tasksObj})
    }

    function addTasks(title: string, todolistId: string) {
        let task = {id: v1(), title: title, isDone: false}
        let tasks = tasksObj[todolistId];
        let newTasks = [task, ...tasks];
        tasksObj[todolistId] = newTasks;
        setTasks({...tasksObj})
    }

    function changeStatus(tId: string, isDone: boolean, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let task = tasks.find(t => t.id === tId)
        if (task) {
            task.isDone = isDone;
            setTasks({...tasksObj})
        }
    }

    function changeTaskTitle(tId: string, newTitle: string, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let task = tasks.find(t => t.id === tId)
        if (task) {
            task.title = newTitle;
            setTasks({...tasksObj})
        }
    }

    function completelyRemoveTasksForTodolist(todolistId: string) {
        delete tasksObj[todolistId];
        setTasks({...tasksObj});
    }

    function addStateForNewTodolist(todolistId: string) {
        setTasks({
            ...tasksObj,
            [todolistId]: []
        })
    }

    return {
        tasksObj,
        removeTask,
        addTasks,
        changeStatus,
        changeTaskTitle,
        completelyRemoveTasksForTodolist,
        addStateForNewTodolist
    }
}