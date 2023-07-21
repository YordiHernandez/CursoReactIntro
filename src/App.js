import logo from './platzi.webp';
import React from 'react';
import { TodoCounter } from './TodoCounter'; //Importar el archivo con el COmponente
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem'; //ctr + enter ayuda a exportar componentes seleccionando el componente 
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  { text: 'Cortar Cebolla' , completed: true},
  { text: 'Curso Intro React' , completed: false},
  { text: 'Llorar' , completed: false},
  { text: 'JIJIJIA' , completed: true},
  {text: 'hola' , completed: false}
]

function App() {

  const [searchValue, setSearchValue] = React.useState('');
  console.log('Se busca:' + searchValue)

  const [todos, setTodos] = React.useState(defaultTodos)

  const completedTodos = todos.filter(todo => !!todo.completed /*doble negacion convierte cualquier resultdado en booleano*/).length;

  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo =>{return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())});

  const completeTodo = (text) => {
    const newTodos = [...todos]; //Crea una copia del array que le indico luego de los ...
    const todoIndex = newTodos.findIndex((todo)=> todo.text == text);

    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]; //Crea una copia del array que le indico luego de los ...
    const todoIndex = newTodos.findIndex((todo)=> todo.text == text);

    newTodos.splice(todoIndex, 1); //splice sirve para 'tajar una posicion del array(indice, cantidad a borrar desde ese indice)
    setTodos(newTodos);

  }


  return (
    /* crea un fragmento de react ya que siempre se necesita un contenedor para renderizar , en dado caso no se quiera uno de xml*/
    <div id='containerMaster'>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <TodoList>
        {searchedTodos.map(todo => ( 
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={()=> completeTodo(todo.text)} onDelete={()=> deleteTodo(todo.text)} />
        ))} {/* Por cada elemento del array se genera un nuevo array (todo recibe como parametro cada elemento) , entonces se genera una key para ca uno y se envia text para el item */}

      </TodoList>
      <CreateTodoButton /> 
    </div>
  
  ); {/* tambien se puede declarar react.fragment con una etiqueta vacia */}
}
export default App;
