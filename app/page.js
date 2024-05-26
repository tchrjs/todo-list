"use client";

import { useState } from "react";
import Task from "./components/task";
import { GoPlus } from "react-icons/go";

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState("");
    const [isDrawerActive, setDrawerActive] = useState(false);

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
        <main className="w-full h-screen flex flex-col overflow-hidden">
            <div className="w-full flex justify-center items-center px-4">
                <div className="w-1/3"></div>
                <h1 className="w-1/3 p-4 text-lg underline flex flex-col items-center text-nowrap">
                    Todo List
                </h1>
                <div className="w-1/3 justify-end flex">
                    <GoPlus
                        className="scale-150 text-gray-700"
                        onClick={() => {
                            setDrawerActive(!isDrawerActive);
                        }}
                    />
                </div>
            </div>
            <div className="w-full px-4 my-2 flex gap-4 justify-center items-center">
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
            <div className="w-full h-fit flex flex-col items-center px-8 py-4 mt-4 mb-16 bg-blue-50 gap-2 overflow-auto hover:overflow-scroll">
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
            <div
                className={`fixed w-full ${
                    isDrawerActive
                        ? "pointer-events-all"
                        : "pointer-events-none"
                }`}
            >
                <div
                    className={`w-screen h-screen bg-black ${
                        isDrawerActive ? "opacity-50" : "opacity-0"
                    } transition-opacity duration-500`}
                    onClick={() => {
                        setDrawerActive(false);
                    }}
                ></div>
                <div
                    className={`fixed w-full h-5/6 bottom-0 bg-white flex flex-col items-center rounded-t-xl ${
                        isDrawerActive ? "translate-y-0" : "translate-y-full"
                    } transition-transform duration-500`}
                >
                    <div className="w-12 h-2 bg-gray-300 rounded-lg my-2"></div>
                    <h1 className="">add a tasks here</h1>
                </div>
            </div>
        </main>
    );
}
