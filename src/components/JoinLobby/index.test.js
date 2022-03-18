import { default as JoinLobby } from ".";
import { screen, render } from "@testing-library/react";
import MockedSocket from "socket.io-mock";

describe("CreateLobby", () => {
  it("renders lobby", () => {
    const socket = new MockedSocket();
    socket.on("lobbyPlayers", (msg) => {
      expect(msg).toBeCalled();
    });
    render(<JoinLobby socket={socket} />);
    let content = screen;
    expect(content).toBeTruthy();
  });
});
