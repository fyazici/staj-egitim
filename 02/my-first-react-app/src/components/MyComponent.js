import React, {Component} from "react";
import "./MyComponent.css"

class MyComponent extends Component {

    state = {
        count: 0,
        myKey: "myValue"
    };
    
    increaseCount = () => {
        console.log("increased");
        this.setState({count: this.state.count + 1});
    };

    divStyle = {
        fontSize: "20px",
        margin: "10px",
        padding: "20px"
    };

    render() {
        let myVar = "my var";
        return (
            <div>
                <div className="MyClass" style={{fontSize: this.state.count}}>Hello World! {this.props.name} {myVar} {this.props.children} {this.state.myKey} {this.state.count}</div>
                <br/>
                <button onClick={() => this.increaseCount()}>increase count</button>
            </div>
        );
    }
}

export default MyComponent;
