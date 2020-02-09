import React, { useEffect, useState } from "react";
import {
  useParams,
  useHistory
} from "react-router-dom";
import { useGet } from "restful-react";
import { Spinner } from "../layout/Spinner";
import styled from "styled-components";
import axios from "axios";
import Repos from "./Repos";
import { Grid1, Grid2, Grid3 } from '../Styles/StyleComponent'

const SingleUser = () => {
  const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  const [repos, setRepo] = useState([]);
  const { login } = useParams();
  const history = useHistory();

  const url = `https://api.github.com/users/${login}?client_id=${client_id}&client_secret=${client_secret}`;
  const { loading, error, data } = useGet(url);
  const url_repo = `https://api.github.com/users/${login}/repos?per_page=4&sort=created:asc&client_id=${client_id}&client_secret=${client_secret}`;
  useEffect(() => {
    axios.get(url_repo).then(res => setRepo(res.data));
  }, [url_repo]);

  if (loading) return <Spinner />;
  if (data !== null && error) return "Something went wrong...";

  function handleClick() {
    history.goBack();
  }

  return (
    <div>
      <p
        style={{
          border: "1px solid orangered",
          width: "7rem",
          margin: "10px 20px",
          padding: "6px 20px",
          borderRadius: "5px",
          cursor: 'pointer'
        }}
        onClick={handleClick}
      >
        <i className='fa fa-arrow-left'></i> Back
      </p>
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          padding: "1% 0",
          color: "#888"
        }}
      >
        {data === undefined || data.name} <span>GitHub Profile</span>
      </h1>
      <Parent>
        <Grid1>
          <div className='img'>
            <img src={data === undefined ? null : data.avatar_url} alt='' />
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div className='follower'>
              <i className='fa fa-user-plus'>
                {" "}
                Followers <i className='fa fa-arrow-right'></i>
              </i>
              <span>{data === undefined || data.followers}</span>
              <p className='repo'>
                Public Repos <i className='fa fa-arrow-right'></i>{" "}
                {data === undefined || data.public_repos}
              </p>
            </div>
            <div className='follower'>
              <i className='fa fa-user-plus'>
                {" "}
                Following <i className='fa fa-arrow-right'></i>
              </i>
              <span>{data === undefined || data.following}</span>
              <p className='repo'>
                Public Gists <i className='fa fa-arrow-right'></i>{" "}
                {data === undefined || data.public_gists}
              </p>
            </div>
          </div>
          <div className='bio'>
            <p>{data === undefined || data.bio}</p>
          </div>
        </Grid1>
        <Grid2>
          <div>
            <h1>{data === undefined || data.name}</h1>
          </div>
          <p>
            <span>Email: </span>
            {data === undefined || data.email}
          </p>
          <p>
            <span>Blog: </span>
            {data === undefined || data.blog === "" ? "No blog" : data.blog}
          </p>
          <p>
            <span>Location: </span>
            {data === undefined || data.location === null
              ? "No location"
              : data.location}
          </p>
          <p>
            <span>Location: </span>
            {data === undefined || data.company === null
              ? "No company"
              : data.company}
          </p>
          <a href={data === undefined || data.html_url}>GitHub Profile</a>
        </Grid2>
      </Parent>
      <h2 style={{ textAlign: "center", fontSize: "3rem", padding: "30px 0" }}>
        List Of First 4 Repos
      </h2>
      <Grid3>
        {repos === undefined ||
          repos === null ||
          repos.map(repo => {
            return <Repos key={repo.id} repo={repo} />;
          })}
      </Grid3>
    </div>
  );
};

export default SingleUser;

const Parent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  padding: 1.5% 9%;
`;