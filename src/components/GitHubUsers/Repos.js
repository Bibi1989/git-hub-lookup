import React from "react";
import styled from "styled-components";
import github4 from '../../github4.svg'

const Repos = ({ repo: { full_name, description, owner, language, forks, html_url, name } }) => {
  return (
    <div>
      <ShowRepo>
        {
          <main>
            <div>
              <span className="fa fa-github-alt"> </span> <span>{full_name}</span>
            </div>
            <div>
              <span>{description}</span>
            </div>
            <div className="fork">
              <p><span className="fa fa-globe"></span> <span>{language}</span></p>
              <p><span className="fa fa-user"></span> <span>{owner.login}</span></p>
              <p><img src={github4} alt='' /> <span>{forks}</span></p>
            </div>
            <a href={html_url}>{name}</a>
          </main>
        }
      </ShowRepo>
    </div>
  );
};

export default Repos;

const ShowRepo = styled.ul`
  padding: 3% 10%;
  color: #777;
  main {
    border-radius: 5px;
    margin: 10px 0;
    padding: 20px;
    border: 1px solid #999;
    div{
        margin: 10px 0;
        font-size: 0.9rem;
    }
    a{
        display: inline-block;
        border: 1px solid orange;
        text-decoration: none;
        color: #999;
        border-radius: 5px;
        padding: 2px 10px;
    }
    .fork{
        display: flex;
        justify-content: space-around;
        p:last-child{
            display: flex;
            img{
                width: 16px;
                margin-right: 5px;
            }
        }
    }
    span:first-child {
    }
  }
`;
