import React from 'react';
import '../App.css';
import {TaskType, Todolist} from "../Todolist";
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@mui/material';
import {Menu} from '@mui/icons-material';
import {useTodolists} from "./hooks/useTodolists";
import {useTasks} from "./hooks/useTasks";

export type FilterValuesType = 'All' | 'Active' | 'Complete';

export type TodolistType = {
    id: string,
    title: string,
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function App() {
    const {
        tasksObj,
        removeTask,
        addTasks,
        changeStatus,
        changeTaskTitle,
        completelyRemoveTasksForTodolist,
        addStateForNewTodolist
    } = useTasks();

    let {
        todolists,
        changeFilter,
        removeTodolist,
        changeTodolistTitle,
        addTodolist,
    } = useTodolists(completelyRemoveTasksForTodolist,
        addStateForNewTodolist);

    return (
        <div className="App">

            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: '20px'}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={3}>
                    {todolists.map((tl) => {

                        let tasksForTodolist = tasksObj[tl.id];

                        if (tl.filter === 'Complete') {
                            tasksForTodolist = tasksForTodolist.filter(t => t.isDone)
                        }
                        if (tl.filter === 'Active') {
                            tasksForTodolist = tasksForTodolist.filter(t => !t.isDone)
                        }

                        return <Grid>
                            <Paper style={{padding: '10px'}}>
                                <Todolist key={tl.id}
                                          id={tl.id}
                                          title={tl.title}
                                          tasks={tasksForTodolist}
                                          removeTask={removeTask}
                                          changeFilter={changeFilter}
                                          addTask={addTasks}
                                          changeTaskStatus={changeStatus}
                                          filter={tl.filter}
                                          removeTodolist={removeTodolist}
                                          changeTaskTitle={changeTaskTitle}
                                          changeTodolistTitle={changeTodolistTitle}
                                />
                            </Paper>
                        </Grid>
                    })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default App;
