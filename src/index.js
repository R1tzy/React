import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Relogio from './components/Relogio';
import Tabuada from './components/Tabuada';
import Cores from './components/Cores';


const root = ReactDOM.createRoot(document.getElementById('root'));

let n = parseInt(prompt("informe um número", "5"))

root.render(
  <div>
    <Cores/>
    <Tabuada n={n}/>
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





