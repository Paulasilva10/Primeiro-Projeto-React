import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import { Container, ToDoList, Input, Button, ListItem, Trash, Check } from './styles.js'


//sintaxe JSX
function App() {
  //codigo js
  //retorna codigo html

  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState('');
  //"Levar o Nico para passear","Terminar as aulas de React no DevClub"

  function inputMudou(event) {
    setInputTask(event.target.value)

  }

  function cliqueinobotao() {
    if(inputTask){
    setList([...list, { id: uuid(), task: inputTask, finished: false }]);
}
  }

  function finalizarTarefa(id) {

    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))
    setList(newList)
  }

  function deletarItem(id) {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  return (
    <Container>
      
      <ToDoList>
      <h2>Lista de Tarefas</h2>
        <Input onChange={inputMudou} placeholder="O que tenho para fazer" type="text" />
        <Button onClick={cliqueinobotao} >Adicionar</Button>
        
        <ul>
          {
            list.length > 0 ? (
              list.map((item) => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => finalizarTarefa(item.id)} />
                  <li >{item.task}</li>
                  <Trash onClick={() => deletarItem(item.id)} />
                </ListItem>
              ))
            ) : (
              <h3>Não há itens na lista</h3>
            )}
        </ul>
      </ToDoList>
    </Container>

  )
}

export default App
