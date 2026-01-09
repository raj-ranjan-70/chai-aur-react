import { useState } from "react";

function TodoList1() {
    const [inp, setInp] = useState("");
    const [tasks, setTasks] = useState([]);

    const addtask = () => {
        setTasks([...tasks, inp]);
        setInp("");
    }

    const deletetask = (index) => {
        let newtasks = tasks.filter((_, i) => i !== index)
        setTasks(newtasks);
    }

    return ( 
        <>
        <h1>Todo List 1</h1>

        <input type="text"
        placeholder="Enter Your Text"
        onChange={(e) => {setInp(e.target.value)}}
        value={inp}
        className="border-2 rounded-3xl p-2 text-amber-700" />

        <button onClick={addtask} className="m-2 p-2 rounded-2xl border-2">Add</button>

        <ul className="list-disc list-inside">
            {tasks.map((task, index) => {
                return(
                    <li key={index}>
                        {task}
                        <button onClick={() => {deletetask(index)}}
                            className="m-2 p-2 rounded-2xl border-2">Delete</button>
                    </li>
                )
            })}
        </ul>

        </>
     );
}

export default TodoList1;