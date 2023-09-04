function TodoList ( {children} ) {
    return (
      <>
      <ul>
        {children} {/* permite poner los hijos de las propiedades */}
      </ul>
      <br />
      </>
    );
  }
  
export { TodoList }; //Exportacion nombrada