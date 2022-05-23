import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Chore from ".//Chore";
import axios from "axios";

// const api = axios.create({
//   baseURL: `http://localhost:8080/chore`,
// });

const Nav = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    padding: "0",
    overflow: "hidden",
    margin: "2%",
    color: "green",
    fontSize: "20px",
    width: "70%",
    border: "solid thin white",
    borderRadius: "8px",
    backgroundColor: "white",
    textAlign: "center",
    overflow: "hidden",
  };
  const [chores, setChores] = useState();
  const [loadingNAV, setLoadingNAV] = useState(true);

  const getChores = useCallback(async () => {
    const response = await axios.get("http://localhost:8080/chore/all");
    if (response.status === 200) {
      setChores(response.data);
      setLoadingNAV(false);
    }
  }, []);

  useEffect(() => {
    if (!chores) {
      setLoadingNAV(true);
      getChores();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {}, [chores]);

  return (
    <div className="nav">
      {loadingNAV ? (
        <p>loading</p>
      ) : (
        <ul className="nav-ul">
          <Link style={linkStyle} to="/Todo">
            <li className="nav li" id="li-link">
              TODO
            </li>
          </Link>
          {chores.map((chore) => (
            <Chore
              key={chore.id}
              chore={chore}
              chores={chores}
              setChores={setChores}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Nav;
