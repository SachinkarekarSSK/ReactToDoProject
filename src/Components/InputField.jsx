import React, { useState } from "react";
import { useToDo } from "../Context/ToDoContext";

const InputField = () => {
  // useToDo is custom hook that will provide us a context that holds a state and methods
  const { ToDoList, setToDoList, addToDo } = useToDo();

  // we are using a useState hook that is prebuild hook in react . 
  const [TextofToDo, setTextofToDo] = useState("");  //In this state we will get the input

  

  return (
    <>
      <div className="box flex flex-col w-full m-auto gap-4 mb-10">

{/* input for user to add todo */}
        <input
          type="text"
          placeholder="Enter Your ToDo"
          className="input input-bordered input-info w-full "
          value={TextofToDo}
          onChange={(e) => {
            setTextofToDo(e.target.value);
          }}
        />

{/* button that will add the todo */}
        <button className="btn bg-blue-700 text-white font-bold" onClick={()=>{
          //addToDo is a method that we defined in a context .this method takes an object to add in an array 
          addToDo({id:Math.floor(Math.random()*100), ToDoText:TextofToDo, completed:false})
          setTextofToDo('')
        }}>Add</button>
      </div>
    </>
  );
};

export default InputField;
