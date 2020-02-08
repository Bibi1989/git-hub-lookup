import styled from "styled-components";

export const Image = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  img {
    display: block;
    margin: auto;
    border-radius: 50%;
    width: 100%;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding: 3% 10%;
  .user {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 25px 0 25px;
    border: 1px solid orange;
    border-radius: 5px;
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
    .link-flex{
        display: flex;
        justify-content: space-between;
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
