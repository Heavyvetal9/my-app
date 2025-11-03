import {useState} from "react";
import {todolistId1, todolistId2} from "../id-utils";
import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export function useTodolists(onTodolistRemoved: (todolistId: string) => void,
                             onTodolistAdded: (todolistId: string) => void,
) {
    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: 'What to learn', filter: 'All'},
        {id: todolistId2, title: 'What to buy', filter: 'All'}
    ])

    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = value;
            setTodolists([...todolists]);
        }
    }

    let removeTodolist = (todolistId: string) => {
        let filteredTodolist = todolists.filter(tl => tl.id !== todolistId)
        setTodolists(filteredTodolist);
        onTodolistRemoved(todolistId)
    }

    function changeTodolistTitle(id: string, newTitle: string) {
        const todolist = todolists.find(tl => tl.id === id)
        if (todolist) {
            todolist.title = newTitle;
            setTodolists([...todolists])
        }
    }

    function addTodolist(title: string) {
        let todolist: TodolistType = {
            id: v1(),
            filter: 'All',
            title: title
        }
        setTodolists([todolist, ...todolists]);
        onTodolistAdded(todolist.id)

    }

    return {
        todolists,
        setTodolists,
        changeFilter,
        removeTodolist,
        changeTodolistTitle,
        addTodolist
    }
}

