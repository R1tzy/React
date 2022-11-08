import React from "react";

/*
Use shouldComponentUpdate() para permitir que o React saiba se o resultado de um componente não é afetado 
pelas mudanças atuais em state ou props. O comportamento padrão é para re-renderizar a cada mudança do state, 
e na grande maioria dos casos você deve confiar no comportamento padrão.

shouldComponentUpdate() é executado antes da renderização, quando novas props ou state são recebidos. O valor default é true. Este método não é chamado na renderização inicial ou quando forceUpdate()é usado.

*/

class ComponentUpdate extends React.Component{
    constructor(){
        super()
        this.state={data:0}
    }
    
    shouldComponentUpdate(nextProps, nextState){
        if(nextState.data === this.state.data){
            return false
        }
        return true
    }

    render() {
        console.log("Contador");
        return (
          <div>
            <h2>Counter:{this.state.data}</h2>
            <button onClick={()=>{this.setState({data:this.state.data+1})}}>Add</button>
          </div>
        );
    }
}

export default ComponentUpdate