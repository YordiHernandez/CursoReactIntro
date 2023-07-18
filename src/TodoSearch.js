import './TodoSearch.css'

function TodoSearch () {
    return (
      <>
      <input placeholder="Cortar Cebolla"  onChange={(event)=>{console.log("Cambiaste el texto")
            console.log(event)
            console.log(event.target)
            console.log(event.target.value)}} />
      <br />
      <hr />
      </>
    );
  }
  
export { TodoSearch }; //Exportacion nombrada