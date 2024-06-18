// src/components/FileItem.jsx
import React from "react";
import { FaFolder, FaFile } from "react-icons/fa";

const FileItem = ({ node, onFolderClick }) => {
    return (
        <div className="flex items-center mb-2">
            {node.isFolder ? (
                <FaFolder className="mr-2 text-yellow-500" />
            ) : (
                <FaFile className="mr-2 text-gray-500" />
            )}
            <button
                className="text-blue-500"
                onClick={() => node.isFolder && onFolderClick(node)}
            >
                {node.name}
            </button>
        </div>
    );
};

export default FileItem;
