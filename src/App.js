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
  { text: 'JIJIJIA' , completed: false}
]

function App() {
  return (
    /* crea un fragmento de react ya que siempre se necesita un contenedor para renderizar , en dado caso no se quiera uno de xml*/
    <div id='containerMaster'>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => ( 
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))} {/* Por cada elemento del array se genera un nuevo array (todo recibe como parametro cada elemento) , entonces se genera una key para ca uno y se envia text para el item */}

      </TodoList>
      <CreateTodoButton /> 
    </div>
  
  ); {/* tambien se puede declarar react.fragment con una etiqueta vacia */}
}
export default App;
