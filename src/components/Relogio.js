function Relogio(){
    const element =(
        <div>
            <h1>Data e Hora</h1>
            <h2>{new Date().toLocaleTimeString()}.</h2>
        </div>  
    );
    return element;
}

export default Relogio