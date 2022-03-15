import { default as Home } from ".";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  beforeEach(() => render(<Home />));

  it("renders create lobby button", () => {
    const create = screen.queryByText("Create Lobby");
    expect(create).toBeInTheDocument();
  });

  it("renders join lobby button", () => {
    const join = screen.queryByText("Join Lobby");
    expect(join).toBeInTheDocument();
  });

  it("renders greeting", () => {
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
