import { useEffect, useState } from "react";

function PasswordGenerator() {
    const [password, setPassword] = useState("");
    const [characterAllowed, setCharacterAllowed] = useState(false);
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [length, setLength] = useState(8);

    const passgenerator = () => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const number = "0123456789";
        const character = "!@#$%^&*()_-";

        if(characterAllowed) str += character;
        if(numberAllowed) str += number;
        for(let i=1;i<=length;i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }

        setPassword(pass);
    }
    useEffect(() => {
        passgenerator();
    }, [numberAllowed, characterAllowed, length, setPassword])

    const copyfunc = () => {
        window.navigator.clipboard.writeText(password);
    }
    return ( 
        <>
        <h1>Password : {password}</h1> 
        <button onClick={copyfunc} className="border-2 rounded-4xl mx-6 px-2 py-0.5 hover:bg-amber-700 cursor-pointer">Copy</button> <br />
        <input 
        type="checkbox"
        onChange={() => setCharacterAllowed(!characterAllowed)}/>
        <label>Characters</label>
        <br />
        <input type="checkbox" 
        onChange={() => setNumberAllowed(!numberAllowed)}/>
        <label>Numbers</label>
        <br />
        <input type="range"
        min={8}
        max={20}
        defaultValue={8}
        onChange={(e) => {
            setLength(e.target.value);
        }}/>
        <label>Length: {length}</label>
        </>
     );
}

export default PasswordGenerator;