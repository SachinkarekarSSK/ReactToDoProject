import React from 'react'
import { useToDo } from '../Context/ToDoContext';
import ToDoCard from './ToDoCard';

const ToDoBOX = () => {

  const { ToDoList, setToDoList, addToDo,UpdateToDo } = useToDo();


  return (
    <>
      {
        ToDoList.map((item)=>{
          return(
            <ToDoCard key={item.id} item={item} />
          )
        })
      }
    </>
  )
}

export default ToDoBOX