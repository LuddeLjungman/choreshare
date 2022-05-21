import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TodoHome from ".//components/TodoHome";
import Nav from "./components/Nav";

export const App = () => {
  return (
    <div>
      <Router>
        <header>
          <h1 id="headTitle">
            <a id="headTitle" href="/">
              ChoreShare
            </a>
          </h1>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Nav />}></Route>
            <Route path="/Todo" exact element={<TodoHome />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
};
export default App;
