import React from "react";

class Tabuada extends React.Component {
    render() {
        let resultado = []
        for (let i=1; i<= 10; i++) {
            resultado.push(<h3>{this.props.n} x {i} = {this.props.n*i}</h3>)
        }
        return (
            <div>
                <h2>Tabuada do {this.props.n}</h2>
                {resultado}
            </div>
        )
    }
}

export default Tabuada