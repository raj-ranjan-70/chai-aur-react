import { useEffect, useState, useRef } from "react";

function Stopwatch() {

    const [seconds, setSeconds] = useState(0);
    const intervalref = useRef(null);
    
    const start = () => {
        if(intervalref.current !== null) return;

        intervalref.current = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
    }

    const stop = () => {
        clearInterval(intervalref.current);
        intervalref.current = null;
    }

    const reset = () => {
        stop()
        setSeconds(0);
    }

    useEffect(() => {
        return () => clearInterval(intervalref.current);
    }, []);


    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor(seconds % 60);

    return ( 
        <div className="flex flex-wrap justify-center text-3xl items-center">

        <h1>{h} : {m} : {s}</h1> <br />
        <button onClick={start} className="mx-2 my-2 border-2 rounded-4xl px-2 py-2">Start</button>
        <button onClick={stop} className="mx-2 my-2 border-2 rounded-4xl px-2 py-2">Stop</button>
        <button onClick={reset} className="mx-2 my-2 border-2 rounded-4xl px-2 py-2">Reset</button>
        </div>
     );
}

export default Stopwatch;