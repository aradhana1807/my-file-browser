// src/components/Breadcrumbs.jsx
import { IoChevronForward } from "react-icons/io5";

const Breadcrumbs = ({ path, navigateTo }) => {
    return (
        <div className="flex space-x-2 mb-4 items-center">
            <button
                className="text-green-500 font-semibold"
                onClick={() => navigateTo([])}>
                root
            </button>
            {path.map((folder, index) => (
                <button key={index} onClick={() => navigateTo(path.slice(0, index + 1))} className="flex items-center">
                    <IoChevronForward className="w-4 h-4 mr-1" /> {folder.name}
                </button>
            ))}
        </div>
    );
};

export default Breadcrumbs;
