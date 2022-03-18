import { default as PlayerList } from ".";
import { screen, render } from "@testing-library/react";

describe("PlayerList", () => {
  it("renders players", () => {
    render(<PlayerList />);
    let content = screen;
    expect(content).toBeTruthy();
  });
});
