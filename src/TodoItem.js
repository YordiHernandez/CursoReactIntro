import './TodoItem.css';
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai"

function TodoItem(props){
    return(
      <li className='TodoItem'>
        <label>
          <input type='checkbox' style={{display: 'none'}} />
          <span id='check'><AiOutlineCheck className={`icon Icon-check ${props.completed && "Icon-check--active"}`}/></span>
        </label>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p> {/*  recibe el text enviada en el app.js por medio de props   */}
        <label>
          <input type='checkbox' style={{display: 'none'}} />
          <span id='close' className='Icon Icon-delete'>< AiOutlineCloseCircle className='icon' /></span>
        </label>
      </li>
    );
  }

  export { TodoItem };