import React from "react";

/*
componentDidUpdate() é invocado imediatamente após alguma atualização ocorrer. Este método não é chamado pelo initial render. Use isto como uma oportunidade para alterar o DOM quando o componente for atualizado. Este também é um bom lugar para realizar requisições de rede enquanto compara as props atuais com as props anteriores 

*/

class DidUpdate extends React.Component{
    constructor(){
        super()
        this.state = {texto:"teste001"}
    }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ company: 'teste002' });
    }, 600);
  }
  
  componentDidUpdate() {
    document.getElementById('mostrar').innerHTML =
      'Esse é o ' + this.state.company;
  }
  
  render() {
    return (
        <div>
            <h1>
                {this.state.company}
                <div id="mostrar"></div>
            </h1>
        </div>
    );
  }

}

export default DidUpdate