import React, { useState } from "react";
import "./tasklist.css";

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const handleRemoveTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="taskpage">
            <div className="container">
                <div className="chatai">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
                    </svg>
                    <strong>Task List</strong>
                </div>
                <div className="chatarea">
                    {tasks.length === 0 ? (
                        <p className="no-tasks">No tasks added</p>
                    ) : (
                        tasks.map((task, index) => (
                            <div key={index} className="task-item">
                                <span>{task}</span>
                                <button className="cancel-btn" onClick={() => handleRemoveTask(index)}>✖</button>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter a new task..."
                />
                <button onClick={handleAddTask}>Add</button>
            </div>
        </div>
    );
}

export default TaskList;
