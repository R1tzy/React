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
import DidUpdate from './components/DidUpdate';

const root = ReactDOM.createRoot(document.getElementById('root'));

// let n = parseInt(prompt("informe um número", "5"))

root.render(
  <div>
    
    <DidUpdate/>
    {/* 
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





