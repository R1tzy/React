import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Relogio from './components/Relogio';
// import Tabuada from './components/Tabuada';
// import Cores from './components/Cores';
// import Mensagem from './components/Mensagem';
// import Header from './components/Header';
// import Container from './components/Container';
// import DerivedState from './components/DerivedState';
// import ComponentUpdate from './components/ComponentUpdate';
// import SnapshotBefore from './components/SnapshotBefore';
// import DidUpdate from './components/DidUpdate';
// import Contador from './components/Contador';
// import ToDoList from './components/ToDoList';
import Calculadora from './components/Calculadora';


const root = ReactDOM.createRoot(document.getElementById('root'));

// let n = parseInt(prompt("informe um número", "5"))


// const Item1 = {
//   id:Date.now(),
//   text:"Item 1"
// }

// const Item2 = {
//   id:Date.now(),
//   text:"Item 2"
// }



root.render(
  <div>
    <Calculadora/>
    {/* 
    <Contador/>
    <ToDoList/>
    <DidUpdate/>
    <SnapshotBefore/>
    <ComponentUpdate/>
    <DerivedState text="Texto do DerivedState"/>
    <Mensagem/>
    <Container/>
    <Header/>
    <Cores/>
    <Tabuada n={n}/> */}
  </div>
)


// function main(){
//   root.render(
//     <div>
//       <Relogio/>
//       <Tabuada n={n}/>
//     </div>
//   )
// }
// setInterval(main, 1000)





