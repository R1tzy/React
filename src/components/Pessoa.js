//passando vários valores ao invés de usar props em tudo
// function Pessoa(props){
//     return(
//         <div>
//             <h2>Nome: {props.nome}</h2>
//             <p>Idade: {props.idade}</p>
//             <p>Profissão: {props.profissao}</p>
//         </div>
//     );
// }

function Pessoa({nome, idade, profissao}){
    return(
        <div>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    );
}

export default Pessoa