import React from "react";
import github4 from '../../github4.svg'
import { ShowRepo } from '../Styles/StyleComponent'

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