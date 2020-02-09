import React from "react";
import { Image } from "../Styles/StyleComponent";
import { Link } from 'react-router-dom'

export const ShowUsers = ({ detail }) => (
  <div className='user'>
    <Image>
      <img src={detail.avatar_url} alt={detail.login} />
    </Image>
    <p>{detail.login}</p>
    <div className="link-flex">
    <a href={detail.html_url}>GitHub Profile</a>
    <Link to={`/user/${detail.login}`}>User Profile</Link>
    </div>
    <hr />
  </div>
);
