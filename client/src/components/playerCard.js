import React from "react";
import styled from "styled-components";

import GithubCard from "./card";

const PlayersCard = props => {
  return (
    <div>
      <GithubCard data={props.data} />
    </div>
  );
};

export default PlayersCard;
