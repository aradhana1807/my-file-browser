// src/components/Terminal.jsx
import React, { useState, useEffect } from "react";
import { fileSystem } from "../data";

const Terminal = ({ isOpen, onClose }) => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState([]);
    const [currentDir, setCurrentDir] = useState(fileSystem);

    const handleCommand = (command) => {
        const args = command.split(" ");
        const cmd = args[0];
        const params = args.slice(1);

        let newOutput = [...output, `> ${command}`];

        switch (cmd) {
            case "ls":
                newOutput = [...newOutput, ...currentDir.children.map(child => child.name)];
                break;
            case "cd":
                if (params.length > 0) {
                    const targetDir = currentDir.children.find(child => child.name === params[0] && child.isFolder);
                    if (targetDir) {
                        setCurrentDir(targetDir);
                        newOutput.push(`Changed directory to >${params[0]}`);
                    } else {
                        newOutput.push(`Directory not found: ${params[0]}`);
                    }
                }
                break;
            case "clear":
                newOutput = [];
                break;
            case "exit":
                onClose();
                break;
            case "help":
                newOutput = [...newOutput, "Available commands:", "ls", "cd", "clear", "exit"];
                break;
            case "cd ..":
                if (currentDir.parent) {
                    setCurrentDir(currentDir.parent);
                    newOutput.push(`Changed directory to >${currentDir.parent.name}`);
                } else {
                    newOutput.push("Cannot go up from root directory");
                }
                break;
            default:
                newOutput.push(`Command not found: ${cmd}`);
        }

        setOutput(newOutput);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCommand(input);
        setInput("");
    };

    return (
        isOpen && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
                <div className="bg-black text-white p-4 w-2/3 h-2/3 overflow-auto">
                    <button onClick={onClose} className="text-right text-red-500 mb-2">Close</button>
                    <div className="overflow-y-auto h-full">
                        {output.map((line, index) => (
                            <div key={index}>{line}</div>
                        ))}
                        <form onSubmit={handleSubmit} className="mt-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="bg-black border-none w-full text-white"
                                autoFocus
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    );
};

export default Terminal;
