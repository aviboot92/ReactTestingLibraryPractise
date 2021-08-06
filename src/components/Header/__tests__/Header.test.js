import { render, screen } from "@testing-library/react";
import Header from "../Header";

// W.r.t Component

describe("Header", () => {
  // Get
  it("should render the same text passed in the title Prop", () => {
    render(<Header title="My Head" />);
    const headerElement = screen.getByText(/my head/i);
    expect(headerElement).toBeInTheDocument();
  });

  // it("should render the same text passed in the prop", () => {
  //   render(<Header title="My Roles" />);
  //   const headerElement = screen.getByRole("heading");
  //   expect(headerElement).toBeInTheDocument();
  // });

  it("should render the my cats text passed in the title prop", () => {
    render(<Header title="My Cats" />);
    const catHeader = screen.getByRole("heading", { name: "Hello" });
    expect(catHeader).toBeInTheDocument();
  });
});
