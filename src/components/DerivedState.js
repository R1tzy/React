import React from "react";

/*
getDerivedStateFromProps é invocado imediatamente antes de chamar o método render, 
ambos na montagem inicial e nas atualizações subsequente. Devem retornar um objeto 
para atualizar o state, ou null para não atualizar nada.
*/

class DerivedState extends React.Component{
    constructor(props){
        super(props)
        this.state = {texto:"Texto Construtor"}
        console.log(this.state.texto)
    }

    static getDerivedStateFromProps(props, state){
        return {texto:props.text}
    }

    render(){
        return(
            <h1>{this.state.texto}</h1>
        )
        
    }
}

export default DerivedState