"use client";

import { useState } from "react";

export default function Task({ description }) {
    return (
        <div className="w-full flex gap-2  items-center">
            <input type="checkbox" name="item" />
            <label>todo</label>:<p>{description ?? "missing description"}</p>
        </div>
    );
}
