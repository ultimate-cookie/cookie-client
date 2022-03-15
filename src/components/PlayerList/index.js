import React from "react";
import { Link } from "react-router-dom";
import { Player, StartButton } from "../index";

const PlayerList = () => {
  return (
    <>
      <Player />
      <Link to="/play">
        <StartButton />
      </Link>
    </>
  );
};

export default PlayerList;
