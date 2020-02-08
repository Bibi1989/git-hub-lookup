import React, { useContext, useState } from "react";
import { Searchs } from "../Styles/StyleComponent";
import { Context } from "../Context/Context";

const Search = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(Context);
  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSearch = e => {
    e.preventDefault();
    dispatch({ type: "text", payload: text });
  };

  return (
    <Searchs>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Search githuber profile...'
          onChange={handleChange}
        />
        <button type='submit'>Search User</button>
      </form>
    </Searchs>
  );
};

export default Search;
