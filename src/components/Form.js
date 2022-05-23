import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8080/api`,
});

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    api
      .post("/create", {
        body: inputText,
      })
      .then(function (response) {
        setTodos([...todos, response.data]);
      });
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  const deleteAllCompleteHandler = (e) => {
    e.preventDefault();
    api.delete("/all").then(function (response) {
      setTodos(
        response.data.forEach((deleted) =>
          todos.find((todo) => todo.id !== deleted.id)
        )
      );
    });
  };

  return (
    <form className="formWrapper">
      <button
        type="button"
        className="todo-button"
        onClick={deleteAllCompleteHandler}
      >
        Delete all completed
      </button>
      <div className="inputWrapper">
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
          placeholder=" Enter a Todo..."
        />
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="All">All</option>
            <option value="Completed"> Completed</option>
            <option value="Not Complete">Not Complete</option>
          </select>
        </div>
      </div>
      <div
        style={{
          marginRight: "10%",
        }}
      >
        {inputText.length > 0 && (
          <button
            disabled={inputText.length === 0}
            onClick={submitTodoHandler}
            className="todo-button"
            type="submit"
          >
            <i>
              <FaPlus
                style={{
                  color: "white",
                  borderRadius: "50px",
                  marginTop: "3px",
                  fontSize: "30px",
                }}
              />
            </i>
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
