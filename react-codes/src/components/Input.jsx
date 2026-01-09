function input(props) {
    return ( 
        <>
        <input type="range" 
        min={10}
        max={50}
        placeholder="Enter the Number"
        onChange={(e) => props.setState(e.target.value)} />
        </>
     );
}

export default input;