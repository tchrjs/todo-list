"use client";

import { useState } from "react";

export default function Task({ description }) {
    return (
        <div className="w-full flex gap-2 items-center rounded-lg p-4 bg-white drop-shadow-lg">
            <input type="checkbox" name="item" />
            <p>{description ?? "missing description"}</p>
        </div>
    );
}
