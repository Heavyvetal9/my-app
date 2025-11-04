import {useEffect, useState} from "react";
import axios from "axios";


export default {
    title: 'API'
}
const settings = {
    withCredentials: true,
    headers: {
        'APY-KEY': '536d21d6-730b-4453-bbd1-15de76837fba'
    }
}
export const GetTodolists = () => {
    const [state, setState] = useState<any>({name: 'Vitaly'})
    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: 'Vitaly todolist'}, settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

    }, [])
    return <div>{JSON.stringify(state)}</div>
}