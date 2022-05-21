import React, { useEffect } from "react";
import Todo from "./Todo";

const TodoList = ({ todos, todo, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos
          ? filteredTodos.map((todo) => (
              <Todo
                setTodos={setTodos}
                key={todo.id}
                text={todo.text}
                todos={todos}
                todo={todo}
              />
            ))
          : todos.map((todo) => {
              <Todo
                setTodos={setTodos}
                key={todo.id}
                text={todo.text}
                todos={todos}
                todo={todo}
              />;
            })}
      </ul>
    </div>
  );
};
export default TodoList;
