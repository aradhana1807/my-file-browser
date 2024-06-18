// src/components/MenuBar.jsx
import React, { useState } from "react";

const MenuBar = ({ onCreate, onDelete }) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("folder");

    const handleCreate = () => {
        if (name.trim()) {
            onCreate(name, type === "folder");
            setName("");
        }
    };

    return (
        <div className="mb-4 flex space-x-4">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="border p-2"
            />
            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="border p-2"
            >
                <option value="folder">Folder</option>
                <option value="file">File</option>
            </select>
            <button onClick={handleCreate} className="rounded-md bg-green-500 hover:bg-green-600 text-white p-2">
                Create
            </button>
            <button onClick={onDelete} className="rounded-md bg-red-500 hover:bg-red-600 text-white p-2">
                Delete
            </button>
        </div>
    );
};

export default MenuBar;
