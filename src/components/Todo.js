import React, { useEffect } from "react";
import { FiCheck } from "react-icons/fi";
import { GrTrash } from "react-icons/gr";
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8080/api`,
});

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    api.delete(`/${todo.id}`).then(function (response) {});
    setTodos(todos.filter((deletedTodo) => deletedTodo.id !== todo.id));
  };
  const completeHandler = () => {
    api
      .put(`/completed/${todo.id}`, {
        completed: true,
      })
      .then(function (response) {
        setTodos(
          todos.map((item) => {
            if (item.id === todo.id) {
              return {
                ...item,
                completed: !item.completed,
              };
            }
            return item;
          })
        );
      });
  };

  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <p className="todo-item">{todo.body} </p>

      <div className="btn-wrapper">
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check">
            <FiCheck />
          </i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash">
            <GrTrash />
          </i>
        </button>
      </div>
    </div>
  );
};
export default Todo;
