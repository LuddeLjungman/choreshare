import React from "react";
import axios from "axios";

const Chore = ({ chore, chores, setChores }) => {
  const completeChoreHandler = () => {
    axios
      .put(`http://localhost:8080/chore/${chore.id}`, {
        done: true,
      })
      .then(function (response) {
        setChores(
          chores.map((item) => {
            if (item.id === chore.id) {
              return {
                ...item,
                done: !item.done,
              };
            }
            console.log(item);
            return item;
          })
        );
      });
  };
  return (
    <div className={`chore ${chore.done ? "completed" : ""}`}>
      <li className="chore" onClick={completeChoreHandler}>
        {chore.chore}
      </li>
    </div>
  );
};
export default Chore;
