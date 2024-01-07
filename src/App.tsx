import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import { Container, ToDoList, Input, Button, ListItem,  } from './styles.js'
import { FcFullTrash, FcCheckmark } from "react-icons/fc";

//sintaxe JSX
function App() {
  //codigo js
  //retorna codigo html

  const [list, setList] = useState([{ id: uuid(), task: "Adicionar uma tarefa", finished: true }]);
  const [inputTask, setInputTask] = useState('');
  //"Levar o Nico para passear","Terminar as aulas de React no DevClub"

  function inputMudou(event) {
    setInputTask(event.target.value)

  }

  function cliqueinobotao() {
    setList([...list, { id: uuid(), task: inputTask, finished: false }]);

  }

  function finalizarTarefa(id: any): React.MouseEventHandler<SVGElement> | undefined {
    throw new Error('Function not implemented.');
  }


  return (
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="O que tenho para fazer" type="text" />
        <Button onClick={cliqueinobotao} >Adicionar</Button>

        <ul>
          {
            list.map((item) => (
              <ListItem isFinished={item.finished} key={item.id} >
                <FcCheckmark />
                <li >{item.task}</li>
                <FcFullTrash />
              </ListItem>
            ))}
        </ul>
      </ToDoList>
    </Container>

  )
}

export default App
