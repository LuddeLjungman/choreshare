import React, { useState, useEffect, useCallback } from "react";

import "../styles.css";
import Form from "./Form";
import TodoList from "./TodoList";
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8080/api`,
});

function TodoHome() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState();
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTodos = useCallback(async () => {
    const response = await api.get("/all");
    if (response.status === 200) {
      setTodos(response.data);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTodos();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Not Complete":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  useEffect(() => {
    getTodos();
  }, [[todos]]);

  return (
    <div>
      {loading ? (
        <p>loading</p>
      ) : (
        <TodoList
          setTodos={setTodos}
          todos={todos}
          filteredTodos={filteredTodos}
          loading={loading}
        />
      )}
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
      />
    </div>
  );
}

export default TodoHome;
