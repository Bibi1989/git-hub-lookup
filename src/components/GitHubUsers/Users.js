import React, { useContext } from "react";
import { Context } from "../Context/Context";
import { ShowUsers } from "../layout/ShowUsers";
import { Grid, H1 } from "../Styles/StyleComponent";
import Search from "./Search";
import { useHistory } from "react-router-dom";

const Users = () => {
  const { data } = useContext(Context);
  const history = useHistory()

  const handleClick = () => {
      history.goForward()
  };

  return (
    <>
      <p
        style={{
          border: "1px solid orangered",
          width: "8rem",
          margin: "10px 20px",
          padding: "6px 20px",
          borderRadius: "5px",
          cursor: "pointer"
        }}
        onClick={handleClick}
      >Forward <i className='fa fa-arrow-right'></i></p>
      <Search />
      <H1>Github Users</H1>
      <Grid>
        {data === null ||
          data === undefined ||
          data.map(detail => {
            return <ShowUsers key={detail.id} detail={detail} />;
          })}
      </Grid>
    </>
  );
};

export default Users;
