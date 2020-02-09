import React, { useContext } from "react";
import { Context } from "../Context/Context";
import { ShowUsers } from "../layout/ShowUsers";
import { Grid } from "../Styles/StyleComponent";
import Search from "./Search";

const Users = () => {
  const { data } = useContext(Context);
  return (
    <>
      <Search />
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
