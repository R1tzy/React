import React from "react";

/*
getSnapshotBeforeUpdate() é invocado imediatamente antes que o retorno da renderização mais 
recente seja escrito no DOM. Isto permite que o componente capture alguma informação do DOM 
(posição do scroll) antes que ela seja potencialmente alterada. Qualquer valor retornado por 
este método do ciclo de vida será passado como parâmetro para componentDidUpdate().
*/


class SnapshotBefore extends React.Component{
    constructor(){
        super()
        this.state = {nome:"Teste01"}
    }
      
    componentDidMount() {
    //Muda o estado depois de 1 segundo
    setTimeout(() => {
        this.setState({ nome:'Teste02'});
    }, 1000);
    }
      
    getSnapshotBeforeUpdate(prevProps, prevState) {
    // Mostra o valor anterior do estado
    document.getElementById('prev').innerHTML =
        'Nome Anterior: ' + prevState.nome;
    }
    
    componentDidUpdate() {
    // Mostra o valor atual do estado
    document.getElementById('new').innerHTML =
        'Nome Atual: ' + this.state.nome;
    }
      
    render() {
    return (
        <div>
        <div id="prev"></div>
        <div id="new"></div>
        </div>
    );
    }  
}

export default SnapshotBefore