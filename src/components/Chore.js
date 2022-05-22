import React from "react";
import axios from "axios";

const Chore = ({ chore, chores, setChores }) => {
  const buttonStyle = {};

  const completeHandler = () => {
    axios
      .put(`http://localhost:8080/chore/${chore.id}`, {
        completed: true,
      })
      .then(function (response) {
        setChores(
          chores.map((item) => {
            if (item.id === chore.id) {
              return {
                ...item,
                completed: !item.completed,
              };
            }
            console.log(item);
            return item;
          })
        );
      });
  };
  return (
    <div className={`chore${chore.completed ? "completed" : ""}`}>
      <li className="chore" onClick={completeHandler}>
        {chore.chore}
      </li>
    </div>
  );
};
export default Chore;
