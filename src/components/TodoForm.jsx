import { useState } from "react";
import "./Todo.css";
export const  TodoForm = ({onAddTodo}) => {


    const [inputvalue, setInputValue] = useState({});

    const handleinputchange = (value) => {
        setInputValue({id : value ,content : value,chekd : false});
      };

    
    const handleFormsubmit = (event) => {
        event.preventDefault()
        onAddTodo(inputvalue)
        setInputValue({id : "" ,content : "",chekd : false})
    }
    return (

        <section className="form">
                <form onSubmit={handleFormsubmit}>
                  <div>
                    <input
                      type="text"
                      className="todo-input"
                      autoComplete="off"
                      value={inputvalue.content}
                      onChange={(e) => handleinputchange(e.target.value)}
                    />
                  </div>
                  <div>
                    <button type="submit" className="todo-btn">
                      add task
                    </button>
                  </div>
                </form>
              </section>
    )
}