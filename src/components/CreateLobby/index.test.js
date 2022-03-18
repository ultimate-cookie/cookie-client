import { default as CreateLobby } from ".";
import { screen, render } from "@testing-library/react";

describe("CreateLobby", () => {
  it("renders lobby", () => {
    render(<CreateLobby />);
    let content = screen;
    expect(content).toBeTruthy();
  });
});
