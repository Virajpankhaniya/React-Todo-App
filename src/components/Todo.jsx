import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoDateTime } from "./TodoDateTime";
import { TodoList } from "./TodoList";
import { getLocalStorageData, setLocalStorageData } from "./LocalStorage";



export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageData());

  const deletTodoElement = (value) => {
    const updateTask = task.filter((curTask) => curTask.content !== value);
    setTask(updateTask);
  };

  const handelAllClear = () => {
    setTask([]);
  };
  const handleFormsubmit = (inputvalue) => {
    const { id, content, chekd } = inputvalue;
    if (!content) return;
    const TodoItemChekd = task.find((curTask) => curTask.content == content);
    if (TodoItemChekd) return;

    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    const formatedDate = now.toLocaleDateString();

    setTask((prev) => [
      ...prev,
      {
        id: id,
        content: content,
        chekd: chekd,
        time: formattedTime,
        date: formatedDate,
      },
    ]);
  };

  

  setLocalStorageData(task)
  const handelChekdTodo = (cotent) => {
    const updatedTsk = task.map((curTask) => {
      if (curTask.content === cotent) {
        return { ...curTask, chekd: !curTask.chekd };
      } else {
        return curTask;
      }
    });
    setTask(updatedTsk);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo list</h1>
        <TodoDateTime />
      </header>
      <TodoForm onAddTodo={handleFormsubmit} />
      <section className="myUnorfList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                date={curTask.date}
                time={curTask.time}
                chekd={curTask.chekd}
                onHandelDeletTodo={deletTodoElement}
                onHandelChekdTodo={handelChekdTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handelAllClear}>
          clear All
        </button>
      </section>
    </section>
  );
};
