"use client";

export default function Task({ title }) {
    return (
        <div className="w-full flex gap-2 items-center rounded-lg p-4 bg-white drop-shadow-lg">
            <input type="checkbox" name="item" />
            <p>title</p>
        </div>
    );
}
