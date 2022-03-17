import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Player, StartButton } from "../index";

const PlayerList = ({ socket }) => {
  const [redirect, setRedirect] = useState(false);
  const startQuiz = () => {
    socket.emit("startQuiz", "Please start the quiz");
    setRedirect(true);
  };
  return (
    <>
      {redirect ? <Redirect to="/play" /> : undefined}
      <Player />
      <StartButton startQuiz={startQuiz} />
    </>
  );
};

export default PlayerList;
