import { useState } from "react";

function TodoList() {
    const [tasks, setTask] = useState([]);
    const [input, setInput] = useState("");

    const addtask = () => {
        if (input.trim() !== "") {
            setTask([...tasks, input]);
            setInput("");
        }
    }

    const deletetask = (index) => {
        let newtasks = tasks.filter((_, i) => i !== index);
        setTask(newtasks);
    }

    return ( 
        <div className="justify-center items-center text-center">
        <h1>To-Do List</h1>
        <input type="text"
        placeholder="Enter the text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-2 p-2 m-2 rounded-2xl"
        />
        <button onClick={addtask} className="border-2 mx-2 my-2 px-2 py-2 rounded-2xl">Add</button>
        
        <ul className="list-disc list-inside">
            {tasks.map((task, index) => {
                return (
                    <li key={index} className="my-2">
                    {task}
                    <button onClick={() => deletetask(index)} className="border-2 mx-2 my-2 px-2 py-2 rounded-2xl">Delete</button>
                    </li>
                );
            })}
        </ul>

        </div>
     );
}

export default TodoList;