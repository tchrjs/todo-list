"use client";

import React, { useState } from "react";
import { GoPlus } from "react-icons/go";

export default function Drawer(props) {
    const [isDrawerActive, setDrawerActive] = useState(false);

    props.hello();

    return (
        <div>
            <GoPlus
                className="scale-150 text-gray-700"
                onClick={() => {
                    setDrawerActive(!isDrawerActive);
                }}
            />
            <div
                className={`fixed left-0 top-0 z-50 ${
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
                />
                <div
                    className={`fixed w-full h-5/6 bottom-0 bg-white  flex flex-col items-center rounded-t-xl ${
                        isDrawerActive ? "translate-y-0" : "translate-y-full"
                    } transition-transform duration-500 gap-4 px-4 py-6`}
                >
                    <div className="absolute w-12 h-2 bg-gray-300 rounded-lg my-2 top-0 drag" />
                    <div className="w-full flex justify-center items-center">
                        <div className="w-1/3"></div>
                        <div className="w-1/3 text-nowrap text-center">
                            add new task
                        </div>
                        <button
                            className="w-1/3 text-end text-blue-500"
                            onClick={() => {
                                setDrawerActive(false);
                            }}
                        >
                            cancel
                        </button>
                    </div>
                    <div className="w-full flex flex-col">
                        <label>title </label>
                        <input
                            className="w-full border-2 rounded-lg"
                            name="priority"
                        ></input>
                    </div>
                    <div className="w-full flex gap-8">
                        <div className="w-full flex flex-col">
                            <label>type </label>
                            <select
                                className="w-full border-2 rounded-lg"
                                name="type"
                            >
                                <option value="task">task</option>
                                <option value="bug">bug</option>
                            </select>
                        </div>
                        <div className="w-full flex flex-col">
                            <label>priority </label>
                            <select
                                className="w-full border-2 rounded-lg"
                                name="priority"
                            >
                                <option value="priority0">1</option>
                                <option value="priority1">2</option>
                                <option value="priority2">3</option>
                                <option value="priority3">4</option>
                                <option value="priority4">5</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full flex flex-col">
                        <label>description</label>
                        <textarea
                            className="border-2 h-52 rounded-lg resize-none"
                            type="text"
                        ></textarea>
                    </div>
                    <button className="border-2 rounded-lg px-4 py-2 self-end">
                        submit
                    </button>
                </div>
            </div>
        </div>
    );
}
