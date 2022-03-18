import { default as JoinLobby } from ".";
import { screen, render } from "@testing-library/react";

describe("CreateLobby", () => {
  it("renders lobby", () => {
    render(<JoinLobby />);
    let content = screen;
    expect(content).toBeTruthy();
  });
});
