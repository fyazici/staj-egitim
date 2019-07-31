import React, {Component} from "react"
import axios from "axios"
import { thisExpression } from "@babel/types";

class MyDataComponent extends Component {
    state = {
        count: 1,
        elements: []
    };
    
    componentDidMount = () => {
        console.log("data comp mounted");
        this.retrieveData();
    };

    retrieveData = () => {
        axios.get(
            "https://jsonplaceholder.typicode.com/todos/" + this.state.count
        ).then((result) => {
            console.log(result.data);
            let currentElements = [...this.state.elements];
            currentElements.push(result.data);
            this.setState({
                count: this.state.count + 1, 
                elements: currentElements
            });
        });
    }

    render() {
        return (
            <div>
                <div>hello world</div>
                <button onClick={this.retrieveData}>make call</button>
                <table border="1"><tbody>
                {this.state.elements.map((elem, elIndex) => {
                    return (
                        <tr key={elIndex}>
                            <td>{elem.id}</td>
                            <td>{elem.title}</td>
                        </tr>
                    );
                })}
                </tbody></table>
            </div>
        );
    }
};

export default MyDataComponent;