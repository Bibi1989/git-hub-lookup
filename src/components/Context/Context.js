import React, { useReducer, useState, useEffect } from "react";
import { useGet } from "restful-react";
import { Spinner } from "../layout/Spinner";
import { reducer } from "./reducer";
import axios from "axios";

export const Context = React.createContext();

let initialState = {
  text: "",
  single: null
};

export const ContextProvider = props => {
  const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

  const [state, dispatch] = useReducer(reducer, initialState);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users`)
      .then(res => setUsers(res.data));
  }, []);

  const { loading, error, data } = useGet(
    `https://api.github.com/search/users?q=${state.text}&client_id=${client_id}&client_secret=${client_secret}`
  );

  if (loading) return <Spinner />;
  if (data !== null && error) return "Something went wrong...";

  let {items} = data === null || data

  return (
    <Context.Provider
      value={{
        data: state.text === '' ? users : items,
        dispatch,
        state
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
