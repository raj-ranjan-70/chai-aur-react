import React from "react";

class CounterWithClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialvalue};
    }


    render() {
        return(
            <>
            <h1>Count: {this.state.count}</h1>
            <button onClick={() => this.setState({count: this.state.count + 1})}>Click</button>
            </>
        )
    }
}

export default CounterWithClassComponent;