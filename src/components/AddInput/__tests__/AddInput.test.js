import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "./../AddInput";

// W.R.T FireEvents

const mockSetTodos = jest.fn();

describe("AddInput render", () => {
  it("should render the AddInput correctly", () => {
    render(<AddInput setTodos={mockSetTodos} todos={[]} />);
    expect(screen).toMatchSnapshot();
  });

  it("should render input correctly", () => {
    render(<AddInput setTodos={mockSetTodos} todos={[]} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    expect(inputElement).toBeInTheDocument();
  });

  it("should chnge the value as per the input", () => {
    render(<AddInput setTodos={mockSetTodos} todos={[]} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    fireEvent.change(inputElement, { target: { value: "Need something" } });
    expect(inputElement.value).toBe("Need something");
  });

  it("should empty the input afrer add click", () => {
    render(<AddInput setTodos={mockSetTodos} todos={[]} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    fireEvent.change(inputElement, { target: { value: "Do something" } });
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBeFalsy();
    // expect(inputElement.value).toBe(""); Both are same as above
  });
});
