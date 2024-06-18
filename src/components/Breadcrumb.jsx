// src/components/Breadcrumbs.jsx
import React from "react";

const Breadcrumbs = ({ path, navigateTo }) => {
    return (
        <div className="flex space-x-2 mb-4">
            <button onClick={() => navigateTo([])}>root</button>
            {path.map((folder, index) => (
                <button key={index} onClick={() => navigateTo(path.slice(0, index + 1))}>
                    / {folder.name}
                </button>
            ))}
        </div>
    );
};

export default Breadcrumbs;
