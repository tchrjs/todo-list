"use client";

import { useState } from "react";
import Task from "./components/task";

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState("");

    const handleChange = (event) => {
        if (event.key === "Enter") handleSubmit();
        else setCurrentTask(event.target.value);
    };

    const handleSubmit = () => {
        if (currentTask === "") return;
        if (tasks.map((task) => task.description).includes(currentTask))
            alert("This exists.");
        else setTasks([...tasks, { description: currentTask }]);
        setCurrentTask("");
    };

    return (
        <main className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="p-4 text-lg underline">Todo List</h1>
            <div className="w-full px-4 mb-6 flex gap-4">
                <input
                    className="border-2 p-2 rounded-lg"
                    placeholder="enter todo item"
                    onChange={handleChange}
                    value={currentTask}
                    onKeyDown={handleChange}
                ></input>
                <button
                    className="border-2 p-2 rounded-lg"
                    onClick={handleSubmit}
                >
                    submit
                </button>
            </div>
            <div className="w-full flex flex-col justify-center items-center px-8 py-4 bg-blue-50">
                {tasks.length === 0 ? (
                    <p className="text-gray-500">task list is empty</p>
                ) : (
                    tasks.map((task) => (
                        <Task
                            description={task.description}
                            key={task.description}
                        />
                    ))
                )}
            </div>
        </main>
    );
}
