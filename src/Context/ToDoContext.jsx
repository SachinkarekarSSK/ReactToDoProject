import React, { createContext, useContext, useState } from 'react'

// step1. create a context using createContext method or hook . this can has a initial state. 
// consider this a store house of a variables and methods
const ToDoContext = createContext({
    ToDoList : [
        // {id:1, TitleOfToDo: Title ,ToDoText:TextofToDo, completed:false}
    ],
    addToDo : (item)=>{},
    UpdateToDo : (id, item)=>{},
    DeleteToDo : (id)=>{},
    CompleteToDo : (id)=>{}
})

const ToDoContextProvider = ({children})=>{

    const [ToDoList, setToDoList] = useState([])
    // console.log(ToDoList);

    // addding a one todo to list
    const addToDo = (item)=>{
        setToDoList((previousList)=>{
            return(
                [...previousList, item]
            )
        })
    }


    const UpdateToDo = (id,cardText)=>{
        setToDoList((previousList)=>{
            return(
                previousList.map((item)=>{
                    return (
                        item.id === id ? {...item, ToDoText: cardText } : item
                    )
                })
            )
        })
    }

    const DeleteToDo = (id)=>{
        setToDoList((previousList)=>{
            return(
                previousList.filter((item)=>{
                    return item.id !== id 
                })
            )
        })
    }

    const Completed = (id,compltedORNo)=>{
        setToDoList((previousList)=>{
            return(
                previousList.map((item)=>{
                    return item.id === id ? {...compltedORNo }: item
                })
            )
        })
    }

    return(
        <ToDoContext.Provider value={{ToDoList,setToDoList,addToDo,UpdateToDo,DeleteToDo,Completed}}>
            {children}
        </ToDoContext.Provider>
    )
}

// created a custom hook that will reduce our work. 
const useToDo = ()=>{
    return useContext(ToDoContext)
}




export default ToDoContextProvider
export  {useToDo}
