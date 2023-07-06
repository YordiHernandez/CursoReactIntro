import './TodoCounter.css'

function TodoCounter ({total, completed}) { //se puede utilizar props y luego usar cada metodo correspondiente o bien algunos en especifico que qeremos

    return (
      <div className='title'>
      <h1 className='todoCounter'>
        Has completado <span>{completed}</span> de <span>{total}</span> TODOS
      </h1>
      </div>
    );
  }
  
export { TodoCounter }; //Exportacion nombrada