// src/components/FileBrowser.jsx
import React, { useState, useEffect } from "react";
import { fileSystem, updateFileSystem } from "../data";
import Breadcrumbs from "./Breadcrumb";
import FileItem from "./FileItem";
import MenuBar from "./MenuBar";
import Terminal from "./Terminal";

const FileBrowser = () => {
  const [path, setPath] = useState([]);
  const [currentDir, setCurrentDir] = useState(fileSystem);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const navigateTo = (newPath) => {
    const newDir = newPath.reduce((acc, cur) => acc.children.find(child => child.name === cur.name), fileSystem);
    setPath(newPath);
    setCurrentDir(newDir);
    setSelectedItem(null);
  };

  const handleFolderClick = (folder) => {
    navigateTo([...path, folder]);
  };

  const handleCreate = (name, isFolder) => {
    const newItem = { name, isFolder, children: isFolder ? [] : undefined };
    currentDir.children.push(newItem);
    setCurrentDir({ ...currentDir });
    updateFileSystem(fileSystem);
  };

  const handleDelete = () => {
    if (selectedItem) {
      const index = currentDir.children.findIndex(child => child.name === selectedItem.name);
      currentDir.children.splice(index, 1);
      setCurrentDir({ ...currentDir });
      setSelectedItem(null);
      updateFileSystem(fileSystem);
    }
  };

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "t") {
      e.preventDefault();
      setIsTerminalOpen(!isTerminalOpen);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isTerminalOpen]);

  return (
    <div className="p-5">
      <MenuBar onCreate={handleCreate} onDelete={handleDelete} />
      <button
        onClick={() => setIsTerminalOpen(true)} className="bg-blue-500 text-white p-2 mb-4 rounded-md">
        Open Terminal
      </button>
      <Breadcrumbs path={path} navigateTo={navigateTo} />
      <div>
        {currentDir.children.map((node, index) => (
          <div
            key={index}
            onClick={() => setSelectedItem(node)}
            className={`cursor-pointer ${selectedItem?.name === node.name ? 'bg-blue-200' : ''}`}
          >
            <FileItem node={node} onFolderClick={handleFolderClick} />
          </div>
        ))}
      </div>
      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  );
};

export default FileBrowser;
