import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "./../Todo";

// W.r.t Integrations

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText("Add a new task here...");
  const buttonElement = screen.getByRole("button");
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });
    fireEvent.click(buttonElement);
  });
};

describe("render Todo", () => {
  it("should render Todo correctly", () => {
    render(<MockTodo />);
    expect(screen).toMatchSnapshot();
  });

  it("should add and display item correctly after clicking Add", () => {
    render(<MockTodo />);
    addTask(["I am doing something"]);
    const divElement = screen.getByText(/I am doing something/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should render multiple items correctly", () => {
    render(<MockTodo />);
    addTask([
      "I am doing something",
      "I am doing nothing",
      "I am doing everything",
    ]);
    const taskElements = screen.getAllByTestId("task-container");
    expect(taskElements.length).toBe(3);
  });

  it("should not have completed class on the element", () => {
    render(<MockTodo />);
    addTask(["I am doing something"]);
    const divElement = screen.getByText(/I am doing something/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("should have completed class on the element after the click", () => {
    render(<MockTodo />);
    addTask(["I am doing something"]);
    const divElement = screen.getByText(/I am doing something/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
