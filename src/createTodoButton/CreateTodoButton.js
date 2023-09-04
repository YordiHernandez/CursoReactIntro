import './CreateTodoButton.css'
import { AiFillPlusCircle } from "react-icons/ai"

function CreateTodoButton(){
    return(
        <button>
            <AiFillPlusCircle id='plusButton' style={{marginTop: '5px'}} 
            onClick={(event)=>{console.log("Click en el boton")
            console.log(event)
            console.log(event.target)}}/> 
        </button>
    );
}

export { CreateTodoButton };