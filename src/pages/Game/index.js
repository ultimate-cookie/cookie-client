import React from "react";
import { Quiz } from "../../components";

const Game = ({ questions }) => {
  return (
    <>
      <Quiz questions={questions} />
    </>
  );
};
export default Game;
