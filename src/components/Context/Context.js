import React, { useReducer } from "react";
import { useGet } from "restful-react";
import { Spinner } from "../layout/Spinner";
import { reducer } from './reducer'

export const Context = React.createContext();

let initialState = {
  text: "",
  single: null
};

export const ContextProvider = props => {
  const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

  const [state, dispatch] = useReducer(reducer, initialState);

  const { loading, error, data } = useGet(
    `https://api.github.com/search/users?q=${state.text}&client_id=${client_id}&client_secret=${client_secret}`
  );

  if (loading) return <Spinner />;
  if (data !== null && error) return "Something went wrong...";

  return (
    <Context.Provider
      value={{
        data,
        dispatch,
        state,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
