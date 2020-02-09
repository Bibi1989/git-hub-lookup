import styled from "styled-components";

export const Image = styled.div`
  width: 100%;
  overflow: hidden;
  img {
    display: inline-block;
    border-radius: 10px;
    width: 100%;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding: 3% 10%;
  .user {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    padding: 0.8rem;
    border: 1px solid orange;
    border-radius: 5px;
    .name{
      padding-left: 20px;
      h1{
        color: #777;
      }
    }
    a {
      margin-top: 20px;
      margin-bottom: 20px;
      border: none;
      border-radius: 5px;
      padding: 5px;
      background: orangered;

      color: #eee;
      text-decoration: none;
    }
    .link-flex {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
`;

export const Searchs = styled.div`
  padding: 20px 10%;
  form {
    width: 100%;
    input {
      padding: 15px;
      border: 1px solid orangered;
      border-radius: 5px;
      width: 100%;
      outline: none;
    }
    button {
      display: block;
      margin: 10px auto;
      padding: 10px 20px;
      border: 1px solid orangered;
      background: transparent;
      border-radius: 5px;
    }
  }
`;

// Repos styling
export const ShowRepo = styled.ul`
  padding: 3% 10%;
  color: #777;
  main {
    border-radius: 5px;
    margin: 10px 0;
    padding: 20px;
    border: 1px solid #999;
    div {
      margin: 10px 0;
      font-size: 0.9rem;
    }
    a {
      display: inline-block;
      border: 1px solid orange;
      text-decoration: none;
      color: #999;
      border-radius: 5px;
      padding: 2px 10px;
    }
    .fork {
      display: flex;
      justify-content: space-around;
      p:last-child {
        display: flex;
        img {
          width: 16px;
          margin-right: 5px;
        }
      }
    }
    span:first-child {
    }
  }
`;

export const Grid1 = styled.div`
  padding: 20px;
  color: #777;
  .img {
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 1.5rem;
    img {
      display: block;
      margin: 0 auto;
      width: 250px;
      height: 250px;
      border-radius: 50%;
    }
  }
  .bio {
    p {
      padding-right: 20px;
      text-align: center;
    }
  }
  .follower {
    font-size: 0.85rem;
    margin-bottom: 2rem;
    i {
      color: orange;
    }
    span {
      padding-left: 1rem;
      color: #777;
    }
    p {
      width: 100%;
      font-size: 0.8rem;
      text-align: center;
    }
    .repo {
      padding: 20px 0;
    }
  }
`;

export const Grid2 = styled.div`
  span {
    color: orange;
    margin-right: 20px;
  }
  h1 {
    padding: 3% 0;
    font-size: 3rem;
  }
  p {
    margin: 20px 0;
  }
  p:last-child {
    padding-bottom: 20px;
  }
  a {
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    background: orangered;
    color: #eee;
    text-decoration: none;
  }
`;

export const Grid3 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0px;
  padding: 0 5%;
`;

export const H1 = styled.h1`
  text-align: center;
  color: #777;
`
