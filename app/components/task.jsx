"use client";

export default function Task({ task }) {
    return (
        <div className="w-full ">
            <div className="w-full flex gap-2 items-center rounded-lg p-4 bg-white border-2">
                <input type="checkbox" name="item" />
                <p>{task.title}</p>
            </div>
        </div>
    );
}
