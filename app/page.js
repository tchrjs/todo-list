"use client";

import React, { useState } from "react";
import Task from "./components/task";
import Drawer from "./components/drawer";

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState("");

    const handleChange = (event) => {
        if (event.key === "Enter") handleSubmit();
        else setCurrentTask(event.target.value);
    };

    const handleSubmit = () => {
        if (currentTask === "") return;
        if (tasks.map((task) => task.title).includes(currentTask))
            alert("This exists.");
        else setTasks([...tasks, { title: currentTask }]);
        setCurrentTask("");
    };

    const hello = () => {
        console.log("hello");
    };

    return (
        <main className="w-full h-screen flex flex-col overflow-hidden">
            <div className="w-full flex justify-center items-center px-4">
                <div className="w-1/3"></div>
                <h1 className="w-1/3 p-4 text-lg underline flex flex-col items-center text-nowrap">
                    Todo List
                </h1>
                <div className="w-1/3 justify-end flex">
                    <Drawer hello={hello} />
                </div>
            </div>
            <div className="w-full px-4 my-2 flex gap-4 justify-center items-center">
                <input
                    className="border-2 p-2 rounded-lg"
                    placeholder="enter a new task"
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
            <div className="w-full h-fit flex flex-col items-center px-8 py-4 mt-4 mb-16 bg-blue-50 gap-2 overflow-auto hover:overflow-scroll">
                {tasks.length === 0 ? (
                    <p className="text-gray-500">task list is empty</p>
                ) : (
                    tasks.map((task) => (
                        <Task title={task.title} key={task.title} />
                    ))
                )}
            </div>
        </main>
    );
}
