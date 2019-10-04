import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid silver;
  border-radius: 3px;
  width: 90%;
  max-width: 550px;
  margin: 30px auto;
  .main-content {
    display: flex;
  }
  .img-wrapper {
    background-color: #f6f8fa;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
    max-width: 200px;
    border-radius: 3px;
    cursor: pointer;
  }
  .profile {
    border-left: 1px solid silver;
    padding: 0 2%;
  }
  .extra-content {
    border-top: 1px solid silver;
  }
`;

const GithubCard = props => {
  return (
    <Card>
      <Card className="profile">
        <h2>{props.data.name}</h2>
        <p>
          Country: <span >{props.data.country}</span>
        </p>
      </Card>
      <div />
    </Card>
  );
};

export default GithubCard;
