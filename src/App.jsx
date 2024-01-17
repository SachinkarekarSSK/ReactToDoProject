import React from "react";
import InputField from "./Components/InputField";
import ToDoContextProvider, { useToDo } from "./Context/ToDoContext";
import ToDoBOX from "./Components/ToDoBOX";

const App = () => {
  return (
    <>
 {/* ToDoContextProvider is a context that provides values and fuctions to all the components that are wrapped in it  */}
      <ToDoContextProvider>

        <div className=" w-screen flex  bg-blue-400 min-h-screen">
          <div className=" p-8 bg-white rounded-lg shadow-lg w-96 h-full mx-auto mt-20 ">
            <div className="flex items-center mb-6">
              <svg
                className="h-8 w-8 text-indigo-500 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                  // stroke-width="2"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <h4 className="font-semibold ml-3 text-lg">SSK TODO</h4>
            </div>

{/* this is a input field container which has a one input and a add btn */}
            <div className="container ">
              <InputField />
            </div>

{/* this is a Todo box that will contain all your todo's that you have added */}
            <div className="cardContainer flex flex-wrap justify-center align-middle gap-5">
              <ToDoBOX />
            </div>

          </div>
        </div>

      </ToDoContextProvider>
    </>
  );
};

export default App;
