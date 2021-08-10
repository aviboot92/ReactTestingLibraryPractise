import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "./../FollowersList";

// W.R.T. Async and FindByText

const MockFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

describe("renders FollowersList", () => {
  it("should render the component correctly", () => {
    render(<MockFollowersList />);
    expect(screen).toMatchSnapshot();
  });

  it("should render the follower item correctly", async () => {
    render(<MockFollowersList />);
    const followerItem = await screen.findByTestId("follower-item-0");
    screen.debug();
    expect(followerItem).toBeInTheDocument();
  });

  // it("should render all the follower items correctly", async () => {
  //   render(<MockFollowersList />);
  //   const followerItems = await screen.findAllByTestId(/follower-item/i);
  //   console.log("I ma followes", followerItems);
  //   expect(followerItems.length).toBe(5);
  // });
});
