import { render, screen } from "@testing-library/react";
import TodoFooter from "./../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </BrowserRouter>
);

// W.r.t. Assertions

describe("Todo Footer", () => {
  it("should render the correct amount of incomplete tasks", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const footerElement = screen.getByText(/5 tasks left/i);
    expect(footerElement).toBeInTheDocument();
  });

  it('should render singular word "task" when numberOfIncompleteTasks is 1', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const footerElement = screen.getByText(/1 task left/i);
    expect(footerElement).toBeInTheDocument();
  });

  it("should render the footer when the prop is passed", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const footerElement = screen.getByText(/1 task left/i);
    expect(footerElement).toBeTruthy();
  });

  it("footer should not be visible when no prop is passed", () => {
    render(<MockTodoFooter />);
    const paragraphElement = screen.getByText("tasks left");
    expect(paragraphElement).not.toBeVisible();
  });

  it("footer should contain paragraph", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText("1 task left");
    expect(paragraphElement).toContainHTML("p");
  });

  it("footer should contain text content", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement).toHaveTextContent("1 task left");
  });

  it("footer toHave TextContent ", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement.textContent).toBe("1 task left");
  });
});
