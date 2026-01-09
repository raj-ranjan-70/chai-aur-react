import React from "react";

class Demo extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("Component Did Mount called");
    }

    componentDidUpdate() {
        console.log("Component Did Update called");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount called");
    }
    
    render() { 
        return ( 
            <h1>This is class component</h1>
         );
    }
}
 
export default Demo;