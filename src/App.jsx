import React from "react";
import FileBrowser from "./components/FileBrowser";
import { FaFile } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="bg-neutral-800 text-white p-4 flex items-center gap-x-2">
        <FaFile />
        <h1 className="text-xl font-mono">
          File Browser</h1>
      </header>
      <main className="p-4 ">
        <FileBrowser />
      </main>
    </div>
  );
}

export default App;
