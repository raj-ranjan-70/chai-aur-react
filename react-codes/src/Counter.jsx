import { useState } from "react";

function Counter() {

    let [count, setCount] = useState(10);

    const increment = () => {
        if(count < 20) {
            setCount(count => count + 1);
        }
    }

    const decrement = () => {
        if(count > 0) {
            setCount(count => count  - 1);
        }
    }

    return (
        <>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </>
    )
}


export default Counter;