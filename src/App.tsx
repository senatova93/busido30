import React from 'react';
import './App.css';
import Todolist from "./Todolist";

function App() {
    const tasks1 = [
        {id:1, title:"HTML",isDone: true},
        {id:2, title:"CSS",isDone: true},
        {id:3, title:"REACT",isDone: false}
    ]
    const tasks2 = [
        {id:1, title:"It's me",isDone: false},
        {id:2, title:"Show must go on",isDone: true},
        {id:3, title:"Hotel California",isDone: true}
    ]
    return (
        <div className="App">
            <Todolist title = "What to learn" tasks = {tasks1}/>
            <Todolist title = "Songs" tasks = {tasks2}/>


        </div>
    );
}

export default App;
