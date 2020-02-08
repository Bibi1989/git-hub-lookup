import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import github2 from "../../github2.svg";

const Nav = ({ title }) => {
  return (
    <div>
      <Ul>
        <li>
          <Link className='link' to='/'>
            <img src={github2} alt='' />
            <p>{title}</p>
          </Link>
        </li>
        <li>
          <Link className='link' to='/contact'>
            Contact Us
          </Link>
          <Link className='link' to='/about'>
            About
          </Link>
        </li>
      </Ul>
    </div>
  );
};

export default Nav;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(90deg, rgba(82,51,70,1) 0%, rgba(114,32,32,1) 48%, rgba(142,47,97,1) 100%);;
  padding: 1.2% 10%;
  li {
    display: flex;
    .link {
      color: #ddd;
      text-decoration: none;
      padding: 0 20px;
      display: flex;
      img {
        width: 30px;
        margin-right: 15px;
      }
    }
  }
`;
