import React from "react";
import "../css/index.css"

class Calculadora extends React.Component{
    constructor(){
        super()
        this.state = {resultado:0}
    }
    render(){
        return(
            <div className="container">
                <h1>Calculadora React</h1>
                
                <div>
                    <h2 className="resultado">{this.state.resultado}</h2>
                    <div>
                        <div>
                            <button className="colorC">AC</button>
                            <button className="colorC">+/-</button>
                            <button className="colorC">%</button>
                            <button className="laranja">÷</button>
                        </div>
                        <div>
                            <button>7</button>
                            <button>8</button>
                            <button>9</button>
                            <button className="laranja">x</button>
                        </div>
                        <div>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                            <button className="laranja">-</button>
                        </div>
                        <div>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button className="laranja">+</button>
                        </div>
                        <div>
                            <button className="zero">0</button>
                            <button>,</button>
                            <button className="laranja">=</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculadora