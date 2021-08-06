import { render, screen } from "@testing-library/react";
import Header from "../Header";

// W.r.t Component

describe("Header", () => {
  // Sanapshot
  it("should render correctly", () => {
    render(<Header title="Dogs" />);
    expect(screen).toMatchSnapshot();
  });

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

  it("should render the my cats text passed in the title prop", () => {
    render(<Header title="My Cats" />);
    const catHeader = screen.getByTitle("header-1");
    expect(catHeader).toBeInTheDocument();
  });

  it("should render the my cats text passed in the title prop", () => {
    render(<Header title="Rudra" />);
    const headerElement = screen.getByTestId("header-2");
    expect(headerElement).toBeInTheDocument();
  });

  // Find BY
  it("should render the my cats text passed in the title prop using Find By", async () => {
    render(<Header />);
    const headerElement = await screen.findByText("Hello");
    expect(headerElement).toBeInTheDocument();
  });

  // Query BY
  it("test using query By", () => {
    render(<Header title="Avinash" />);
    const headerElement = screen.queryByText("Dog");
    expect(headerElement).not.toBeInTheDocument();
  });

  // Get all
  it("should render Header, Testing with GetByAll", () => {
    render(<Header title="Sam" />);
    const headerElements = screen.getAllByText(/Sam/i);
    expect(headerElements.length).toBe(1);
  });
});
