import {useState} from "react";
import {todolistId1, todolistId2} from "../id-utils";
import {TodolistType} from "../App";

export function useTodolists () {
    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: 'What to learn', filter: 'All'},
        {id: todolistId2, title: 'What to buy', filter: 'All'}
    ])
    return [todolists, setTodolists] as const
}

