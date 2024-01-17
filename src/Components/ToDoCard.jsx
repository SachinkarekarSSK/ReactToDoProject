import React, { useState } from "react";
import { useToDo } from "../Context/ToDoContext";

const ToDoCard = ({ item }) => {
  // {id:1, TitleOfToDo: Title ,ToDoText:TextofToDo, completed:false} 
  // above object is an example of item object that we will get .

  const [cardText, setcardText] = useState(item.ToDoText); //this is a use state . we will give intitial state whatever the user had added in input field so that we can show that value in a todocard.
  // same for below
  const [completed, setcompleted] = useState(item.completed);

  const [TrueOrFalseEditable, setTrueOrFalseEditable] = useState(true);

  // this is a method we had created in a context. 
  const { UpdateToDo, DeleteToDo, Completed } = useToDo();

  return (
    <>
      <div  className="">
        <label
          className={`flex items-center h-14 px-2 rounded cursor-pointer 
           ${completed? 'bg-green-400':'bg-white'} `}
          for="task_1"
        >

  {/*this is a check box   */}
          <div className="form-control">
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                checked={completed ? 'checked' : ''}
                className="checkbox checkbox-warning"
                onChange={()=>{
                  setcompleted(!completed)
                }}
                onClick={()=>{
                  //here we are using completed(id,item) method from context. using spread operator 
                  Completed(item.id, {...item, completed:!completed})
                }}
              />
            </label>
          </div>

          <div className="text mr-2">
            <input
              className={`group ml-1 text-sm card-title text-black ${
                completed ? "bg-transparent line-through " : "bg-white"
              } ${TrueOrFalseEditable ? 'focus:input': ''}`}
              type="text"
              disabled={TrueOrFalseEditable? true: false}
              readOnly={TrueOrFalseEditable}
              value={cardText}
              onChange={(e) => {
                setcardText(e.target.value);
              }}
              placeholder="Todo Content"
             
            />
          </div>

          <div className={`form-control ${completed?'btn-disabled': ''}`}>
            <label className="cursor-pointer label">
              <button
                className={`btn border-none font-bold hover:bg-yellow-400 ${completed? 'bg-slate-500': 'bg-yellow-300'}`}
                onClick={() => {
                  setTrueOrFalseEditable(!TrueOrFalseEditable);
                  UpdateToDo(item.id, cardTitle, cardText);

                }}
              >
                {TrueOrFalseEditable? <i className="fa-regular fa-pen-to-square font-bold text-lg"></i> : <i className="fa-solid fa-floppy-disk font-bold text-lg"></i>}
              </button>
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <button
                className="btn border-none bg-red-500 text-white font-bold hover:bg-red-700"
                onClick={() => {
                  DeleteToDo(item.id);
                }}
              >
                <i className="fa-regular fa-trash-can text-lg"></i>
              </button>
            </label>
          </div>
        </label>
      </div>
    </>
  );
};

export default ToDoCard;
