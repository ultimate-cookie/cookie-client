import { default as PlayerList } from ".";
import { screen, render } from "@testing-library/react";
import MockedSocket from "socket.io-mock";

describe("PlayerList", () => {
  it("renders players", () => {
    let socket = new MockedSocket();
    socket.on("lobbyPlayers", () => {
      return ["name"];
    });
    render(<PlayerList socket={socket} />);
    let content = screen;
    expect(content).toBeTruthy();
  });
});
