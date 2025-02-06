import React from "react";
import "./Todo.css";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = ({data,date,time,chekd, onHandelDeletTodo,onHandelChekdTodo }) => {
  return (
    <li  className="todo-item">
      <span className={chekd ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => {onHandelChekdTodo(data)}}>
        <IoMdCheckboxOutline />
      </button>
      <button className="delete-btn" onClick={() => onHandelDeletTodo(data)}>
        <MdDeleteForever />
      </button>

      <span className="task-time">
        ({date} - {time})
      </span>
    </li>
  );
};
