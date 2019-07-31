import React, {Component} from "react";

class MyComponent extends Component {
    render() {
        let myVar = "my var";
        return (
            <div>
                Hello World! {this.props.name} {myVar} {this.props.children}
            </div>
        );
    }
}

export default MyComponent;
