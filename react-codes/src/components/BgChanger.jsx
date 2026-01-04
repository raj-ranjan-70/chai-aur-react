import { useState } from "react";

function BgChanger() {
    const [color, setColor] = useState("olive");
    return ( 
        <>
        <div className="h-screen w-screen justify-center relative"
        style={{backgroundColor: color}}>
            <div className="flex flex-wrap rounded-3xl mb-3 px-2 py-2 justify-items-center-safe align-middle items-center bg-white max-w-fit absolute left-1/2 transform -translate-x-1/2"
            style={{bottom: "40px"}}>
                <button className="rounded-full outline-none m-2 px-2 py-2" 
                style={{backgroundColor: "violet"}}
                onClick={() => setColor("violet")}>Violet</button>
                <button className="rounded-full outline-none m-2 px-2 py-2" 
                style={{backgroundColor: "indigo"}}
                onClick={() => setColor("indigo")}>Indigo</button>
                <button className="rounded-full outline-none m-2 px-2 py-2" 
                style={{backgroundColor: "blue"}}
                onClick={() => setColor("blue")}>Blue</button>
                <button className="rounded-full outline-none m-2 px-2 py-2" 
                style={{backgroundColor: "green"}}
                onClick={() => setColor("green")}>Green</button>
                <button className="rounded-full outline-none m-2 px-2 py-2" 
                style={{backgroundColor: "yellow"}}
                onClick={() => setColor("yellow")}>Yellow</button>
                <button className="rounded-full outline-none m-2 px-2 py-2" 
                style={{backgroundColor: "orange"}}
                onClick={() => setColor("orange")}>Orange</button>
                <button className="rounded-full outline-none m-2 px-2 py-2" 
                style={{backgroundColor: "red"}}
                onClick={() => setColor("red")}>Red</button>
            </div>
        </div>
        </>
     );
}

export default BgChanger;