import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        if(this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        } else if (this.state.count === 0) {
            this.setState({
                count: 0
            })
        }
    }

    render() {
        const h2 = React.createElement('h2', {}, this.state.count);
        const buttonIncrement = React.createElement('button', { onClick: () => { this.increment() } }, '+');
        const buttonDecrement = React.createElement('button', { onClick: () => { this.decrement() } }, '-');
        return React.createElement(React.Fragment, {}, h2, buttonIncrement, buttonDecrement);
    }
}

const component = React.createElement(Counter);

const root = document.querySelector('#root');
ReactDOM.render(component, root);