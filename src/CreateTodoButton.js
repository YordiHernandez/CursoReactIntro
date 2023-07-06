import './CreateTodoButton.css'
import { AiFillPlusCircle } from "react-icons/ai"

function CreateTodoButton(){
    return(
        <button>
            < AiFillPlusCircle id='plusButton' style={{marginTop: '5px'}} /> 
        </button>
    );
}

export { CreateTodoButton };