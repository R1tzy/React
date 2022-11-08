import React from "react";

class Mensagem extends React.Component{
    exibir = (mensagem) => {
        console.log("Você Clicou no Botão")
        alert(mensagem)
    }

    render(){
        return(
            <button onClick={()=>this.exibir("Olá Mundo")}>Clique</button>
        )
    }
}

export default Mensagem