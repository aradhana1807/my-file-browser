// // src/data.js
// export const fileSystem = {
//     name: "root",
//     isFolder: true,
//     children: [
//         {
//             name: "Documents",
//             isFolder: true,
//             children: [
//                 { name: "Resume.pdf", isFolder: false },
//                 { name: "CoverLetter.pdf", isFolder: false },
//             ],
//         },
//         {
//             name: "Pictures",
//             isFolder: true,
//             children: [
//                 { name: "Vacation.jpg", isFolder: false },
//                 { name: "Family.png", isFolder: false },
//             ],
//         },
//         {
//             name: "Music", isFolder: true, children: [
//                 { name: "song1.mp3", isFolder: false },
//                 { name: "song2.mp3", isFolder: false },
//             ]
//         },
//         { name: "todo.txt", isFolder: false },
//     ],
// };


// src/data.js
export let fileSystem = {
    name: "root",
    isFolder: true,
    children: [
        {
            name: "Documents",
            isFolder: true,
            children: [
                { name: "Resume.pdf", isFolder: false },
                { name: "CoverLetter.pdf", isFolder: false },
            ],
        },
        {
            name: "Pictures",
            isFolder: true,
            children: [
                { name: "Vacation.jpg", isFolder: false },
                { name: "Family.png", isFolder: false },
            ],
        },
        { name: "todo.txt", isFolder: false },
    ],
};

export const updateFileSystem = (newFileSystem) => {
    fileSystem = newFileSystem;
};
